import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao1-lazy',
  templateUrl: './botao1-lazy.component.html',
  styleUrls: ['./botao1-lazy.component.scss']
})
export class Botao1LazyComponent {
  constructor(private router: Router){ }
  returnHome(){
    this.router.navigate(["/"])
  }
}
