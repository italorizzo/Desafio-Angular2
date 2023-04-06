import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Main } from '../interface/main';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  urlCat: string

  carregar(url){
    this.urlCat = url
  }

  imagesCat(): Observable<Main>{
    return this.http.get<Main>(this.urlCat)
  }
}
