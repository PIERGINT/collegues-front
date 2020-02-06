import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { listeMats } from '../collegue/matricules.mock';
import { Collegue } from '../collegue/Collegue';
@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html'
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules: Observable<String[]>;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
  }

  rechercher(listeMatricules) {
    listeMatricules = listeMats;
  }

}
