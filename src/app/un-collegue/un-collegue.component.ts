import { Component, OnInit, Input } from "@angular/core";
import { Collegue } from "../shared/domain/collegue";

@Component({
  selector: "app-un-collegue",
  templateUrl: "./un-collegue.component.html",
  styleUrls: ["./un-collegue.component.css"]
})
export class UnCollegueComponent {
  @Input() collegue: Collegue;

  constructor() {}

  setOpinion(opinion) {
    if (opinion) {
      this.collegue.score += 10;
      console.log(this.collegue.score)
    }
    else {
      this.collegue.score -= 5;
      console.log("true")
    }
  }
}
