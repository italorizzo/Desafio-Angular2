import { Botao1LazyComponent } from './botao1-lazy/botao1-lazy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  {path: '', component: Botao1LazyComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class Botao1Module { }
