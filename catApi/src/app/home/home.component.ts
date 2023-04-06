import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../cat-api.service';
import { PutCats } from '../interfaces/put-cats';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showCats: PutCats
  load: boolean = false

  constructor(private cat: CatApiService) { }

  ngOnInit(): void {
    this.cat.getValues().subscribe({
      next: (res) => {
        this.showCats = res
        console.log(this.showCats)
      },
      complete: () => {
        this.load = true
      }
    })
  }

}
