import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  router: any;

  irSaludo() {
    this.router.navigate(['/Saludo']);
  }

  irCrono() {
    this.router.navigate(['/Cronometro']);
  }
}
