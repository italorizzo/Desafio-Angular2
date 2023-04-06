import { Usable } from 'src/app/interface/usable';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaibamaisService {

  dadoRequest: Usable[]
  constructor() { 
    this.dadoRequest = []
  }
  clear(){
    this.dadoRequest.pop()
  }
  request(): Observable<Usable[]>{
    return of(this.dadoRequest)
  }
  dadoUnit(element): void{
    this.dadoRequest.push(element)
  }
}
