import { Component, Input } from '@angular/core';
import { Usable } from 'src/app/interface/usable';

@Component({
  selector: 'app-saiba-mais',
  templateUrl: './saiba-mais.component.html',
  styleUrls: ['./saiba-mais.component.css']
})
export class SaibaMaisComponent {
  @Input() informacao: object

  dado(elemento: Usable){
    console.log(elemento)
  }

}
