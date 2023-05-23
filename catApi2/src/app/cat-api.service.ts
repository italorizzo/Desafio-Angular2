import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PutCats } from './interface/put-cats';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Favorite } from './interface/favorite';
import { AddFavorite } from './interface/add-favorite';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  constructor(private http: HttpClient) { }

  urlStandard: string = 'https://api.thecatapi.com/v1/'
  limit: number = 20
  errors: any[] = ['', ' ', null, undefined]

  options = {headers: new HttpHeaders({
    'x-api-key':'live_bJH9d7aN41e5s8JRGLI6uumu6KA7cowPMWeGvClyy0KxCy1GsLy066G7xzrQD2xG'
  })}
  getValues(): Observable<PutCats>{
    return this.http.get<PutCats>(`${this.urlStandard}images/search?has_breeds=1&limit=${this.limit}&order=RANDOM`, this.options)
  }
  getDetail(id: string): Observable<PutCats>{
    return this.http.get<PutCats>(`${this.urlStandard}images/${id}`)
  }
  getFavorites(): Observable<Favorite[]>{
    return this.http.get<Favorite[]>(`${this.urlStandard}favourites?sub_id=eu`, this.options)
  }
  deleteCat(id): Observable<Favorite[]> {
    return this.http.delete<Favorite[]>(`${this.urlStandard}favourites/${id}`, this.options)
  }
  addFavorite(imgId){
    for(let values of this.errors){
      if(values == imgId){
        throw Error ('Deu erro')
      }
    }
    return this.http.post<AddFavorite>(`${this.urlStandard}favourites`, {"image_id": imgId, "sub_id": 'eu'}, this.options)
  }
}
