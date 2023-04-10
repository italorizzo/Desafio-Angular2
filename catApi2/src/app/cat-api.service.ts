import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PutCats } from './interface/put-cats';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  constructor(private http: HttpClient) { }

  urlStandard: string = 'https://api.thecatapi.com/v1/'
  limit: number = 20

  options = {headers: new HttpHeaders({
    'x-api-key':'live_bJH9d7aN41e5s8JRGLI6uumu6KA7cowPMWeGvClyy0KxCy1GsLy066G7xzrQD2xG'
  })}
  getValues(): Observable<PutCats>{
    return this.http.get<PutCats>(`${this.urlStandard}images/search?has_breeds=1&limit=${this.limit}&order=RANDOM`, this.options)
  }
  getDetail(id: string): Observable<PutCats>{
    return this.http.get<PutCats>(`${this.urlStandard}images/${id}`)
  }
  getFavorites(): Observable<any>{
    return this.http.get<any>(`${this.urlStandard}favourites?sub_id=eu`, this.options)
  }
  deleteCat(id): Observable<any> {
    return this.http.delete<any>(`${this.urlStandard}favourites/${id}`, this.options)
  }
  addFavorite(imgId){
    return this.http.post<any>(`${this.urlStandard}favourites`, {"image_id": imgId, "sub_id": 'eu'}, this.options)
  }
}
