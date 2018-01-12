import { Injectable } from "@angular/core";

import { Collegue } from "../domain/collegue";

import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CollegueService {
  collegues: Collegue[];
  limiteSubject: BehaviorSubject<number> = new BehaviorSubject(100);
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
  listerCollegues(): Promise<Collegue[]> {
    // Make the HTTP request:
    return this.http
      .get<Collegue[]>("http://localhost:8080/collegues")
      .toPromise();
  }
  trouverColleguesByPseudo(pseudo: string): Promise<Collegue> {
    return this.listerCollegues().then(colleguesQuiViennentDuBackend => {
      return colleguesQuiViennentDuBackend.find(col => col.pseudo == pseudo);
    });
  }
  sauvegarder(newCollegue: Collegue): Promise<Collegue> {
    return this.http
      .post<Collegue>("http://localhost:8080/collegues", newCollegue)
      .toPromise();
  }
  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.http
      .patch<Collegue>("http://localhost:8080/collegues/" + unCollegue.pseudo, {
        action: "aimer"
      })
      .toPromise();
  }
  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.http
      .patch<Collegue>("http://localhost:8080/collegues/" + unCollegue.pseudo, {
        action: "detester"
      })
      .toPromise();
  }

  getLimiteObservable() {
    return this.limiteSubject.asObservable();
  }

  setLimite(value) {
    this.limiteSubject.next(value);
  }
}
