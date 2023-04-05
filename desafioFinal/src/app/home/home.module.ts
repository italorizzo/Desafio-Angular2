import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';

export const routes: Routes = [
  {path: 'saiba_mais/:id', component: SaibaMaisComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
