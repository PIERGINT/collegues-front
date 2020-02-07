import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { Collegue } from '../collegue/Collegue';
@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html'
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules: Observable<Collegue[]>;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
  }

  rechercher(nom: string) {
    this.listeMatricules = this.dataservice.rechercherParNom(nom);
  }

}
