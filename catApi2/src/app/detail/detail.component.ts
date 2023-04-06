import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatApiService } from '../cat-api.service';
import { PutCats } from '../interface/put-cats';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  values: PutCats

  constructor(private route: ActivatedRoute, private catApi: CatApiService){
    this.catApi.getDetail(route.snapshot.params['id']).subscribe({
      next: (res) => {
        this.values = res
        console.log(this.values)
      }
    })
  }
}
