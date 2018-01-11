import { Component, OnInit } from "@angular/core";
import { CollegueService } from "../shared/service/collegue.service";
import { Collegue } from "../shared/domain/collegue";

@Component({
  selector: "app-classique",
  templateUrl: "./classique.component.html",
  styleUrls: ["./classique.component.css"]
})
export class ClassiqueComponent implements OnInit {
  constructor(private collegueService: CollegueService) {}
  collegues: Collegue[];

  ngOnInit() {
    this.collegueService.listerCollegues().then(collegues => {
      this.collegues = collegues;
    });
  }
}
