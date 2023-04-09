import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catApi2';
  login: boolean = false

  showLogin(){
    this.login = !this.login;
  }
}
