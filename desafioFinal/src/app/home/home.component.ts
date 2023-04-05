import { Usable } from './../interface/usable';
import { ApiService } from './../api.service';
import { Component, ViewChild } from '@angular/core';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(SaibaMaisComponent, {static: false})
  saibaMais: SaibaMaisComponent

  keyCat: string = 'live_bJH9d7aN41e5s8JRGLI6uumu6KA7cowPMWeGvClyy0KxCy1GsLy066G7xzrQD2xG'
  limit: number = 48
  urlCat: string

  detalhe: boolean = false

  temp: Usable[]
  continuar: boolean = false

  constructor(private apiService: ApiService){
    this.temp = []
  }

  ngOnInit(){
    this.urlCat = `https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=${this.limit}&api_key=${this.keyCat}`
    this.apiService.carregar(this.urlCat)
    this.imagesCat()
  }
  cont: number = 0
  imagesCat(){
    this.apiService.imagesCat().subscribe({
      next: (res)=>{
        for(let c = 0; c < res.length; c++){
          this.temp.push({'id': res[c].id, 'nome': res[c].breeds[0].name, 'origem': res[c].breeds[0].origin, 'url': res[c].url, 'link': {'url1': res[c].breeds[0].vetstreet_url, 'url2': res[c].breeds[0].vcahospitals_url}, 'temperamento': res[c].breeds[0].temperament, 'descricao': res[c].breeds[0].description, 'tempoVida': res[c].breeds[0].life_span, 'pais': res[c].breeds[0].country_codes, 'width': res[c].width, 'height': res[c].height})
        }
      },
      complete: ()=>{
        this.continuar = true
      }
    })
  }
  informacoes(elemento): void{
    this.detalhe = true
    this.saibaMais.dado(elemento)
  }
}
