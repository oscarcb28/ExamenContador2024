import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  
  constructor(private router: Router) {}

  irMenu() {
    this.router.navigate(['/Menu']);
  }
}
