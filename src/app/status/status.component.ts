import { Component, OnInit, HostListener } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.css"]
})
export class StatusComponent implements OnInit {
  statusSubject: BehaviorSubject<boolean> = new BehaviorSubject(
    navigator.onLine
  );
  // status:boolean = false
  constructor() {}

  ngOnInit() {}

  @HostListener("window:online", [])
  online() {
    return this.statusSubject.next(true);
  }
  @HostListener("window:offline", [])
  offline() {
    return this.statusSubject.next(false);
  }

  getStatusObservable() {
    return this.statusSubject.asObservable();
  }
}
