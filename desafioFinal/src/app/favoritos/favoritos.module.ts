import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosLazyComponent } from './favoritos-lazy/favoritos-lazy.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', component: FavoritosLazyComponent}
];

@NgModule({
  declarations: [
    FavoritosLazyComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class FavoritosModule { }
