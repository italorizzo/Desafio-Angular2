import { Component, ViewChild } from "@angular/core"
import { SaibaMaisComponent } from "../saiba-mais/saiba-mais.component"
import { Usable } from "src/app/interface/usable"
import { ApiService } from "src/app/service/api.service"
import { FavoritoService } from "src/app/service/favorito.service"
import { SaibamaisService } from "src/app/service/saibamais.service"


@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.css']
})
export class AnimaisComponent {
  @ViewChild(SaibaMaisComponent, {static: false})
  saibaMais: SaibaMaisComponent

  keyCat: string = 'live_bJH9d7aN41e5s8JRGLI6uumu6KA7cowPMWeGvClyy0KxCy1GsLy066G7xzrQD2xG'
  limit: number = 48
  urlCat: string

  detalhe: boolean = false

  temp: Usable[]
  continuar: boolean = false
  SaibamaisService: any;

  constructor(private apiService: ApiService, private saibamaisService: SaibamaisService, private favoritoService: FavoritoService){
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
  favoritar(id){
    this.favoritoService.adicionarFav(id).subscribe({
      next: (res) => {
        console.log(res)
      }
    })
  }
}
