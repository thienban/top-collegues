import { Component, OnInit, Input } from "@angular/core";
import { Collegue } from "../shared/domain/collegue";
import { CollegueService } from "../shared/service/collegue.service";

@Component({
  selector: "app-un-collegue",
  templateUrl: "./un-collegue.component.html",
  styleUrls: ["./un-collegue.component.css"]
})
export class UnCollegueComponent {
  @Input() collegue: Collegue;

  constructor(private collegueService: CollegueService) {}

  setOpinion(opinion) {
    if (opinion) {
      this.collegueService.aimerUnCollegue(this.collegue).subscribe(col => {
        this.collegue.score = col.score;
      });
    } else {
      this.collegueService.detesterUnCollegue(this.collegue).subscribe(col => {
        this.collegue.score = col.score;
      });
    }
  }
}
