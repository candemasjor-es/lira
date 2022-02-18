import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EventosService {
  API = 'http://52.47.175.136:8000/api'
  constructor(private http: HttpClient) { }



  get  getEventos (){
    return this.http.get('http://13.36.28.36:8000/api/noticias')
  }

  get  getEvento (){
    return this.http.get('http://52.47.175.136:8000/api/evento/${id}')
  }

  get getSocios (){
    return this.http.get('http://52.47.175.136:8000/api/socios')
    
  }

}
