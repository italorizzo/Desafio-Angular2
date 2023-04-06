import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  constructor(private http: HttpClient) { }
  urlFav: string = 'https://api.thecatapi.com/v1/favourites'
  opcoes = {headers: new HttpHeaders({
    'x-api-key':'live_bJH9d7aN41e5s8JRGLI6uumu6KA7cowPMWeGvClyy0KxCy1GsLy066G7xzrQD2xG'
  })}

  adicionarFav(id){
    return this.http.post<any>(this.urlFav, {image_id:id, sub_id:'eu'}, this.opcoes)
  }
  pegarFav(){
    return this.http.get<any>(`${this.urlFav}?sub_id=eu`, this.opcoes)
  }
}
