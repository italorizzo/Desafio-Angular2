import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatApiService } from '../cat-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  values: any
  erro: boolean = false

  constructor(private route: ActivatedRoute,private catApiService: CatApiService, private router: Router){
    this.catApiService.getDetail(route.snapshot.params['id']).subscribe({
      next: (res) => {
        this.values = res
        this.values['imgIcon'] = false
      }
    })
  }
  addFavorite(id){
    this.catApiService.addFavorite(id).subscribe({
      next: (res) => {
        this.erro = false
        this.values['imgIcon'] = true
      },
      error: (err) => {
        this.erro = true
      }
    })
  }
  navigate(){
    this.router.navigate(["fav"])
  }
}
