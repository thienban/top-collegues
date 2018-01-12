import { Injectable } from "@angular/core";

import { Collegue } from "../domain/collegue";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class CollegueService {
  collegues: Collegue[];
  limiteSubject: BehaviorSubject<number> = new BehaviorSubject(100);
  filtreSubject: BehaviorSubject<string> = new BehaviorSubject("");
  ajouterSubject: BehaviorSubject<string> = new BehaviorSubject("");
  colleguesSubject: BehaviorSubject<Collegue[]> = new BehaviorSubject([]);
  opinionSubject: BehaviorSubject<string> = new BehaviorSubject("Aucun vote");
  // Inject HttpClient into service.
  constructor(private http: HttpClient) {
    this.refresh();
  }

  listerCollegues(): Observable<Collegue[]> {
    // Make the HTTP request:

    return this.colleguesSubject.asObservable();
  }

  refresh() {
    this.http
      .get<Collegue[]>("http://localhost:8080/collegues")
      .subscribe(cols => this.colleguesSubject.next(cols));
  }
  trouverColleguesByPseudo(pseudo: string): Observable<Collegue> {
    return this.listerCollegues().map(colleguesQuiViennentDuBackend => {
      return colleguesQuiViennentDuBackend.find(col => col.pseudo == pseudo);
    });
  }
  sauvegarder(newCollegue: Collegue): Observable<Collegue> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .post<Collegue>(
        "http://localhost:8080/collegues",
        JSON.stringify(newCollegue),
        httpOptions
      )
      .map(cols => {
        this.refresh();
        return cols;
      });
  }
  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    this.opinionSubject.next("J'aime " + unCollegue.pseudo);
    return this.http.patch<Collegue>(
      "http://localhost:8080/collegues/" + unCollegue.pseudo,
      {
        action: "aimer"
      }
    );
  }
  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    this.opinionSubject.next("Je deteste " + unCollegue.pseudo);
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

  getOpinionObservable() {
    return this.opinionSubject.asObservable();
  }

  getAjouterObservable() {
    return this.ajouterSubject.asObservable();
  }
  setAjouter(value) {
    this.ajouterSubject.next(value);
  }
}
