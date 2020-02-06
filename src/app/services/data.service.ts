import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Collegue} from '../collegue/Collegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

rechercherParNom(nom : string): Observable<Collegue[]> {
  return this.httpClient.get<Collegue[]>('https://btoulemonde-collegues-api.herokuapp.com/collegues?nom='+ nom)
  
}



}