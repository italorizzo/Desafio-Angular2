import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-botao2',
  templateUrl: './botao2.component.html',
  styleUrls: ['./botao2.component.scss']
})
export class Botao2Component {
  id: string
  constructor(private route: ActivatedRoute){
    this.id = route.snapshot.params['id']
  }
}
