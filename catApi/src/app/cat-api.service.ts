import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PutCats } from './interfaces/put-cats';

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
    return this.http.get<PutCats>(`${this.urlStandard}images/search?has_breeds=1&limit=${this.limit}`, this.options)
  }
}
