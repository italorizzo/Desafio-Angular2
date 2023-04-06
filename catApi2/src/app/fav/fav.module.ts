import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FavLazyComponent } from './fav-lazy/fav-lazy.component';

const route: Routes = [
  {path: '', component: FavLazyComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(route),
    CommonModule
  ]
})
export class FavModule { }
