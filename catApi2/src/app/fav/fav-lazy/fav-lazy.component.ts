import { Router } from '@angular/router';
import { CatApiService } from './../../cat-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fav-lazy',
  templateUrl: './fav-lazy.component.html',
  styleUrls: ['./fav-lazy.component.css']
})
export class FavLazyComponent {
  fav: any[]

  removeCat(id){
    this.catApiService.deleteCat(id).subscribe({
      next: (res) => {
        location.reload()
      }
    })
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
