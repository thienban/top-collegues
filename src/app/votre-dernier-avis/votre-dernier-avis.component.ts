import { Component, OnInit } from "@angular/core";
import { CollegueService } from "../shared/service/collegue.service";
import { Collegue } from "../shared/domain/collegue";

@Component({
  selector: "app-votre-dernier-avis",
  templateUrl: "./votre-dernier-avis.component.html",
  styleUrls: ["./votre-dernier-avis.component.css"]
})
export class VotreDernierAvisComponent implements OnInit {
  constructor(private collegueService: CollegueService) {}
  opinion: string;

  ngOnInit() {
    this.collegueService
      .getOpinionObservable()
      .subscribe(valeurOpinion => (this.opinion = valeurOpinion));
  }
}
