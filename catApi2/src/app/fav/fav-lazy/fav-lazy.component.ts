import { Router } from '@angular/router';
import { CatApiService } from './../../cat-api.service';
import { Component } from '@angular/core';
import { Favorite } from 'src/app/interface/favorite';

@Component({
  selector: 'app-fav-lazy',
  templateUrl: './fav-lazy.component.html',
  styleUrls: ['./fav-lazy.component.css']
})
export class FavLazyComponent {
  fav: Favorite[]

  removeCat(id){
    this.catApiService.deleteCat(id).subscribe({
      next: (res) => {
        location.reload()
      }
    })
  }
  voltarHome(){
    this.router.navigate(["/"])
  }
  detalhe(val){
    this.router.navigate(["/detail/"+val])
  }
  constructor(private catApiService: CatApiService, private router: Router){
    this.catApiService.getFavorites().subscribe({
      next: (res) => {
        this.fav = res
      }
    })
  }
}

