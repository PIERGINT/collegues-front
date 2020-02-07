import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Collegue} from '../collegue/Collegue';
import { environmentprod } from '../../environments/environment.prod';

const backendUrl = environmentprod.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

rechercherParNom(nom : string): Observable<Collegue[]> {
  return this.httpClient.get<Collegue[]>('https://btoulemonde-collegues-api.herokuapp.com/collegues?nom='+ nom)
  
}

ajouterCollegue(newCollegue: Collegue): Observable<void> {
  return this.httpClient.post<void>(backendUrl, newCollegue);
}

}