import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../collegue/Collegue';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue-component.html'

})

export class CollegueComponent implements OnInit {

  @Input() col : Collegue;
  
  modeEdition = false;

  prenomSaisie:string;
  emailSaisie:string;
  urlSaisie:string;

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

  prenomChange(prenomSaisie :string) {
    this.prenomSaisie = prenomSaisie;
  }

  emailChange( emailSaisi :string, saisiePhoto: HTMLInputElement) {
    this.emailSaisie = emailSaisi;
    saisiePhoto.focus();
    //console.log(emailSaisi)
  }

  urlChange( urlSaisie :string) {
    this.urlSaisie = urlSaisie ;
  }
  onMouse() {
    console.log('souris!!!')
  }

  validerCollegue() {
    this.modeEdition = false;
  }
}
