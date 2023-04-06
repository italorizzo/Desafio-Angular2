import { Component } from '@angular/core';
import { CatApiService } from '../cat-api.service';
import { PutCats } from '../interface/put-cats';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showCats: PutCats
  load: boolean = false

  constructor(private cat: CatApiService) { }

  ngOnInit(): void {
    this.cat.getValues().subscribe({
      next: (res) => {
        this.showCats = res
      },
      complete: () => {
        this.load = true
      }
    })
  }

}