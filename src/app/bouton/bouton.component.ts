import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Commentaire } from "../shared/domain/commentaire";
import { CollegueService } from "../shared/service/collegue.service";
import { Collegue } from "../shared/domain/collegue";

@Component({
  selector: "app-bouton",
  templateUrl: "./bouton.component.html",
  styleUrls: ["./bouton.component.css"]
})
export class BoutonComponent implements OnInit {
  @Input() collegue: Collegue;
  @Output() opinion: EventEmitter<boolean> = new EventEmitter();
  closeResult: string;
  commentaire: Commentaire;
  ngOnInit() {
    this.commentaire = new Commentaire("", this.collegue);
  }
  constructor(
    private modalService: NgbModal,
    private collegueService: CollegueService
  ) {}

  jaime(event) {
    this.opinion.emit(true);
  }
  jedeteste(event) {
    this.opinion.emit(false);
  }

  commenter(event) {
    this.collegueService
      .sauvegarderCommentaire(this.commentaire)
      .subscribe(commentaire => {
        this.commentaire = commentaire;
      });
  }

  open(content) {
    this.modalService.open(content).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
