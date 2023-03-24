import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Botao1Component } from './botao1/botao1.component';
import { Botao2Component } from './botao2/botao2.component';
import { Botao3Component } from './botao3/botao3.component';
import { HomeComponent } from './home/home.component';
import { Botao3LazyComponent } from './botao3/botao3-lazy/botao3-lazy.component';

@NgModule({
  declarations: [
    AppComponent,
    Botao1Component,
    Botao2Component,
    Botao3Component,
    HomeComponent,
    Botao3LazyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
