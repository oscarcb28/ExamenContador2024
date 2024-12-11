import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router) {}

  irSaludo() {
    this.router.navigate(['/Saludo']);
  }

  irCrono() {
    this.router.navigate(['/Cronometro']);
  }
}
