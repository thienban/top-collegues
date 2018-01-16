import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-bouton",
  templateUrl: "./bouton.component.html",
  styleUrls: ["./bouton.component.css"]
})
export class BoutonComponent {
  @Output() opinion: EventEmitter<boolean> = new EventEmitter();
  closeResult: string;
  commentaire: string;

  constructor(private modalService: NgbModal) {}

  jaime(event) {
    this.opinion.emit(true);
  }
  jedeteste(event) {
    this.opinion.emit(false);
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
