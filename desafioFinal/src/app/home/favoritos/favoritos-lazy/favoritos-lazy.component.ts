import { SaibamaisService } from '../../../service/saibamais.service';
import { FavoritoService } from '../../../service/favorito.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos-lazy',
  templateUrl: './favoritos-lazy.component.html',
  styleUrls: ['./favoritos-lazy.component.css']
})
export class FavoritosLazyComponent {

  favGatos: any[]
  detalhe: boolean

  constructor(private router: Router, private favoritoService: FavoritoService, private saibamaisService: SaibamaisService){ 
    this.favoritoService.pegarFav().subscribe({
      next: (res) => {
        this.favGatos = res
        console.log(this.favGatos)
      }
    })
  }
}
