import { Component, OnInit } from "@angular/core";
import { CollegueService } from "../shared/service/collegue.service";
import { Collegue } from "../shared/domain/collegue";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  constructor(private collegueService: CollegueService) {}
  collegues: Collegue[];

  ngOnInit() {
    this.collegueService.listerCollegues().subscribe(collegues => {
      this.collegues = collegues;
    });
  }
  setOpinion(opinion, collegue) {
    if (opinion) {
      this.collegueService.aimerUnCollegue(collegue).subscribe(col => {
        collegue.score = col.score;
      });
    } else {
      this.collegueService.detesterUnCollegue(collegue).subscribe(col => {
        collegue.score = col.score;
      });
    }
  }
}
