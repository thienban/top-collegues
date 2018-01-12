import { Component } from "@angular/core";
import { Collegue } from "./shared/domain/collegue";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { CollegueService } from "./shared/service/collegue.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private collegueService: CollegueService) {}
  ngOnInit() {
    this.collegueService.listerCollegues().subscribe(collegues => {});
  }

  setLimite(valeurLimite) {
    this.collegueService.setLimite(valeurLimite);
  }
  setFiltre(valeurFiltre) {
    this.collegueService.setFiltre(valeurFiltre);
  }
  setOpinion() {
    this.collegueService.getOpinionObservable();
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    //ajouter au tableau un nouveau collegue
    let collegueNew = new Collegue(pseudo.value, imageUrl.value, 100);
    //sauvegarder
    this.collegueService
      .sauvegarder(collegueNew)
      .subscribe(data => console.log(data));
    alert("Le collègue " + pseudo.value + " a été ajouté avec succès !");
    //vider les champs
    pseudo.value = "";
    imageUrl.value = "";
    return false;
  }
}
