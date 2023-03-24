import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'desafio';

  texto: boolean = true
  sumirTexto(){
    this.texto = !this.texto
  }

  lista: string[] = ['Angular2', 'Python', 'JavaScript', 'C#']
  adicionar(nome){
    this.lista.push(nome)
  }
  pop(){
    this.lista.pop()
  }

  textoSwich: string = 't2'

  valor: string = ''

  ativo: boolean = true
  alterar(){
    this.ativo = !this.ativo
  }

  constructor(){}
}
