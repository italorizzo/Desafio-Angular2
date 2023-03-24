import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-botao3-lazy',
  templateUrl: './botao3-lazy.component.html',
  styleUrls: ['./botao3-lazy.component.scss']
})
export class Botao3LazyComponent {
  id: string
  constructor(private route: ActivatedRoute){
    this.id = route.snapshot.params['id']
  }
}
