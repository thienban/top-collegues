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

  ngOnInit() {
    this.collegueService.listerCollegues().then(collegues => {
      this.collegues = collegues;
    });
  }
}
