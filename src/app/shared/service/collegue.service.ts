import { Injectable } from "@angular/core";

import { Collegue } from "../domain/collegue";

@Injectable()
export class CollegueService {
  constructor() {}
  listerCollegues(): Promise<Collegue[]> {
    // récupérer la liste des collègues côté serveur
  }
  sauvegarder(newCollegue: Collegue): Promise<Collegue> {
    // TODO sauvegarder le nouveau collègue côté serveur
  }
  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    // TODO Aimer un collègue côté serveur
  }
  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    // TODO Détester un collègue côté serveur
  }
}
