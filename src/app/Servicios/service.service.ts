import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Type } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private  PersonajesApi ="https://rickandmortyapi.com/api/character";

  constructor(private Http: HttpClient) { }


 /**
  * getAllPersonajes
  */
 public getAllPersonajes():Observable<any>{

return this.Http.get(this.PersonajesApi);

  
 }
  


}





