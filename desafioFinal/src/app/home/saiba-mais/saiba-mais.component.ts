import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saiba-mais',
  templateUrl: './saiba-mais.component.html',
  styleUrls: ['./saiba-mais.component.css']
})
export class SaibaMaisComponent {
  dado(elemento){
    console.log(elemento)
  }
}
