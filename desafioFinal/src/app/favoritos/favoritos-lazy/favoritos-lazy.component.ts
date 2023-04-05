import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos-lazy',
  templateUrl: './favoritos-lazy.component.html',
  styleUrls: ['./favoritos-lazy.component.css']
})
export class FavoritosLazyComponent {
  constructor(private router: Router){ }
}
