import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CollegueService } from "../shared/service/collegue.service";
import { Collegue } from "../shared/domain/collegue";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent {
  collegue: Collegue;
  constructor(
    private route: ActivatedRoute,
    private collegueService: CollegueService
  ) {}
  ngOnInit() {
    this.collegueService
      .trouverColleguesByPseudo(this.route.snapshot.params["pseudo"])
      .subscribe(collegueQuiVientDuBack => {
        this.collegue = collegueQuiVientDuBack;
      });
  }
}
