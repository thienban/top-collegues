import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent {
  @Output() opinion : EventEmitter<boolean> = new EventEmitter();

  constructor(){}
    // objet événement en paramètre
  jaime(event) {
    this.opinion.emit(true)
  }
  jedeteste(event) {
    this.opinion.emit(false)
  }
}
