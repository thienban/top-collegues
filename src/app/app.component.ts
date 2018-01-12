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
  //tableau collegue
  collegues: Collegue[];
  ngOnInit() {
    this.collegueService.listerCollegues().then(collegues => {
      this.collegues = collegues;
    });
  }

  setLimite(valeurLimite) {
    this.collegueService.setLimite(valeurLimite);
  }
  setFiltre(valeurFiltre) {
    this.collegueService.setFiltre(valeurFiltre);
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    //ajouter au tableau un nouveau collegue
    let collegueNew = new Collegue(pseudo.value, imageUrl.value, 100);
    this.collegues.push(collegueNew);
    alert("Le collègue " + pseudo.value + " a été ajouté avec succès !");
    //vider les champs
    pseudo.value = "";
    imageUrl.value = "";
    return false;
  }
}
