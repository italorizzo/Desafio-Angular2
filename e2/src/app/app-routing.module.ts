import { HomeComponent } from './home/home.component';
import { Botao2Component } from './botao2/botao2.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'botao1', loadChildren: () => import('./botao1/botao1.module').then((module)=>module.Botao1Module)},
  {path: 'botao2/:id', component: Botao2Component},
  {path: 'botao3/:id', loadChildren: ()=>import('./botao3/botao3.module').then((module)=>module.Botao3Module)}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
