import { Component, OnInit } from "@angular/core";
import { CollegueService } from "../shared/service/collegue.service";
import { Collegue } from "../shared/domain/collegue";

@Component({
  selector: "app-tableau",
  templateUrl: "./tableau.component.html",
  styleUrls: ["./tableau.component.css"]
})
export class TableauComponent implements OnInit {
  constructor(private collegueService: CollegueService) {}
  collegues: Collegue[];
  limite: number;

  ngOnInit() {
    this.collegueService.listerCollegues().then(collegues => {
      this.collegues = collegues;
    });
    this.collegueService
      .getLimiteObservable()
      .subscribe(valeurLimite => (this.limite = valeurLimite));
  }

  setOpinion(opinion, collegue) {
    if (opinion) {
      this.collegueService.aimerUnCollegue(collegue).then(col => {
        collegue.score = col.score;
      });
    } else {
      this.collegueService.detesterUnCollegue(collegue).then(col => {
        collegue.score = col.score;
      });
    }
  }
}
