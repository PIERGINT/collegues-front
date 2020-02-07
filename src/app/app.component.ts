import { Component } from '@angular/core';
import { mock } from './collegue/collegue.mock';
import { Collegue } from './collegue/Collegue';
import {CreerCollegueComponent } from './creercollegue/creer-collegue.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';
  
  collegueinconnu = mock;
  
  tabCols = [
    new Collegue('mat1', 'X1', 'Y1', 'X@Y.fr', new Date(),
    'https://www.unamur.be/sciences/chimie/cbo/members/membres-fichiers/anonymity.jpg/image'),
    new Collegue('mat1', 'X2', 'Y2', 'X@Y.fr', new Date(),
    'https://www.unamur.be/sciences/chimie/cbo/members/membres-fichiers/anonymity.jpg/image'),
    ];

  listeCols: Promise<Collegue>;
  donneeAsync: Promise<string>;
  donnees: string;
  nombreMessage = 2;
  afficherCol = true;

  afficherMasquer() {
    this.nombreMessage++;
    this.afficherCol = !this.afficherCol;

    this.envoyerRequete();
    // ..

  }

  envoyerRequete() {

    new Promise(resolve => {
      // promesse résolue après 1s
      window.setTimeout(() => resolve('bonjour async'), 5000);
    }).then((data: string) => {

      this.donnees = data;

    });

    this.listeCols = fetch('https://darssn.herokuapp.com/collegues')
      .then(resp => resp.json());

  }

}

