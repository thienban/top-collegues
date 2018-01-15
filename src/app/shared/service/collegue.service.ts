import { Injectable, HostListener } from "@angular/core";
import { Collegue } from "../domain/collegue";
import { Vote } from "../domain/vote";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/interval";

@Injectable()
export class CollegueService {
  collegues: Collegue[];
  votes: Vote[];
  limiteSubject: BehaviorSubject<number> = new BehaviorSubject(100);
  filtreSubject: BehaviorSubject<string> = new BehaviorSubject("");
  ajouterSubject: BehaviorSubject<string> = new BehaviorSubject("");
  colleguesSubject: BehaviorSubject<Collegue[]> = new BehaviorSubject([]);
  opinionSubject: BehaviorSubject<string> = new BehaviorSubject("Aucun vote");
  voterSubject: BehaviorSubject<Vote[]> = new BehaviorSubject([]);
  // Inject HttpClient into service.
  constructor(private http: HttpClient) {
    this.refresh();
    this.updateVotes();
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

  voterCollegue(idVote: number): void {
    this.http
      .get<Vote[]>("http://localhost:8080/votes?since=" + idVote)
      .subscribe(votes => this.voterSubject.next(votes));
  }
  getVoterCollegue() {
    return this.voterSubject.asObservable();
  }

  updateVotes() {
    Observable.interval(5000).subscribe(() =>
      this.http
        .get<Vote[]>("http://localhost:8080/votes?since=")
        .subscribe(votes => this.voterSubject.next(votes))
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
