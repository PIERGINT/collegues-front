import { Component, OnInit } from '@angular/core';
import { listeMats } from '../collegue/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html'
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules: string[];

  constructor() { }

  ngOnInit() {
  }

  rechercherParNom(nom: string) {
    console.log('saisie=', nom);
    this.listeMatricules = listeMats;
  }

}
