import { Injectable } from "@angular/core";

import { Collegue } from "../domain/collegue";

import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CollegueService {
  collegues: Collegue[];
  limiteSubject: BehaviorSubject<number> = new BehaviorSubject(100);
  filtreSubject: BehaviorSubject<string> = new BehaviorSubject("");
  // Inject HttpClient into service.
  constructor(private http: HttpClient) {}

  listerCollegues(): Observable<Collegue[]> {
    // Make the HTTP request:
    return this.http.get<Collegue[]>("http://localhost:8080/collegues");
  }
  trouverColleguesByPseudo(pseudo: string): Observable<Collegue> {
    return this.listerCollegues().map(colleguesQuiViennentDuBackend => {
      return colleguesQuiViennentDuBackend.find(col => col.pseudo == pseudo);
    });
  }
  sauvegarder(newCollegue: Collegue): Observable<Collegue> {
    return this.http.post<Collegue>(
      "http://localhost:8080/collegues",
      newCollegue
    );
  }
  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    return this.http.patch<Collegue>(
      "http://localhost:8080/collegues/" + unCollegue.pseudo,
      {
        action: "aimer"
      }
    );
  }
  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    return this.http.patch<Collegue>(
      "http://localhost:8080/collegues/" + unCollegue.pseudo,
      {
        action: "detester"
      }
    );
  }

  getLimiteObservable() {
    return this.limiteSubject.asObservable();
  }
  setLimite(value) {
    this.limiteSubject.next(value);
  }

  getFiltreObservable() {
    return this.filtreSubject.asObservable();
  }

  setFiltre(value) {
    this.filtreSubject.next(value);
  }
}
