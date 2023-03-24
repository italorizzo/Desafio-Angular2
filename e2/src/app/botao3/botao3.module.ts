import { Botao3LazyComponent } from './botao3-lazy/botao3-lazy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  {path: '', component: Botao3LazyComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class Botao3Module { }
