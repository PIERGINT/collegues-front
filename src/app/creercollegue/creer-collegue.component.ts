import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../collegue/Collegue';
import { DataService } from '../services/data.service';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html'

})

export class CreerCollegueComponent implements OnInit {

  collegueNew: Collegue = new Collegue();
  messageErreur: string;
  messageOk: string;


  constructor(private dataservice: DataService) {
  }

  ngOnInit() {
    this.collegueNew.photoUrl = 'https://www.unamur.be/sciences/chimie/cbo/members/membres-fichiers/anonymity.jpg/image'
  }

  submit() {
    console.log(this.collegueNew)
  }

  creerUnCollegue(etatForm: NgForm) {
    this.messageErreur = null;
    this.messageOk = null;
    this.dataservice.ajouterCollegue(this.collegueNew)
      .subscribe(
        () => {
          this.messageOk = 'Super !';
          etatForm.reset();
          console.log('Création de votre nouveau collègue')
        },
        error => {
          this.messageErreur = `Le collègue n'a pu être créé`

      })
      
}
}