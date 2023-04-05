import { Component, Input } from '@angular/core';
import { Usable } from 'src/app/interface/usable';

@Component({
  selector: 'app-saiba-mais',
  templateUrl: './saiba-mais.component.html',
  styleUrls: ['./saiba-mais.component.css']
})
export class SaibaMaisComponent {
  dados: Usable
  dado(elemento){
    this.dados = elemento
    console.log(this.dados)
  }
}
