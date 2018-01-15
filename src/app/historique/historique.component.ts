import { Component, OnInit } from "@angular/core";
import { CollegueService } from "../shared/service/collegue.service";
import { Collegue } from "../shared/domain/collegue";
import { Vote } from "../shared/domain/vote";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-historique",
  templateUrl: "./historique.component.html",
  styleUrls: ["./historique.component.css"]
})
export class HistoriqueComponent implements OnInit {
  votes: Observable<Vote[]>;

  constructor(private collegueService: CollegueService) {}

  ngOnInit() {
    this.votes = this.collegueService.getVoterCollegue();
  }
}
