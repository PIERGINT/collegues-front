import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../collegue/Collegue';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue-component.html'

})

export class CollegueComponent implements OnInit {

  @Input() col : Collegue;
  
  constructor() {
  }

  ngOnInit() {
  }

  modifierCollegue() {
    console.log('Modification du collègue')
  }

  creerUnCollegue() {
    console.log('Création de votre nouveau collègue')
  }
}
