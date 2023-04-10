import { CatApiService } from './../cat-api.service';
import { Component } from '@angular/core';
import { PutCats } from '../interface/put-cats';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showCats: PutCats
  showCatsCopy: PutCats
  load: boolean = false
  erro: any
  cont: number = 0
  seachInput: boolean

  constructor(private catApiService: CatApiService) { }

  ngOnInit(): void {
    this.catApiService.getValues().subscribe({
      next: (res) => {
        this.showCats = res
        this.showCats[this.cont]['imgIcon'] = false
        this.cont++
      },
      complete: () => {
        this.load = true
      }
    })
  }
  addFavorite(id){
    this.catApiService.addFavorite(id).subscribe({
      next: (res) => {
        this.erro = false
        for(let c  = 0; c < this.showCats.length; c++){
          if(this.showCats[c]['id']==id){
            this.showCats[c]['imgIcon'] = true
          }
        }
      },
      error: (err) => {
        this.erro = true
      } 
    })
  }
  seach(sit){
    this.seachInput = sit
  }
  filtrar(val){
    for(let i = 0; i < this.showCats.length; i++){
      if(this.showCats[i]["name"] == val){
        console.log('certo')
      }
    }
  }
}
