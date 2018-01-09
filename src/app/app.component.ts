import { Component } from "@angular/core";
import { Collegue } from "./shared/domain/collegue";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  collegues: Collegue[];
  ngOnInit() {
    this.collegues = [];
    let clement = new Collegue("Clement", "", 100);
    this.collegues.push(clement);
    let sandra = new Collegue("Sandra", "", 100);
    this.collegues.push(sandra);
    let melodie = new Collegue("Melodie", "", 100);
    this.collegues.push(clement);
    let alexandre = new Collegue("Alexandre", "", 100);
    this.collegues.push(alexandre);
    let assia = new Collegue("asia", "", 100);
    this.collegues.push(assia);
    let momo = new Collegue("Mohammed", "", 100);
    this.collegues.push(momo);
    let yves = new Collegue("Yves", "", 100);
    this.collegues.push(yves);
    let tb = new Collegue("Thien-Ban", "", 100);
    this.collegues.push(tb);
  }
}
