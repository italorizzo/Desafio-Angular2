import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
import { AnimaisComponent } from './animais/animais.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const route: Routes = [
  {path: '', component: AnimaisComponent},
  {path: 'fav', loadChildren: () => import('./favoritos/favoritos.module').then((module)=>module.FavoritosModule)},
  {path: 'detal/:id', component: SaibaMaisComponent},
];

@NgModule({
  declarations: [
    AnimaisComponent
  ],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class DistributeModule { }
