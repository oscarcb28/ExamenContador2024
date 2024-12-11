import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent {

  constructor(private router: Router) {}

  numero:number = 0;

  listaTiempos:[]=[]

  play(): void {
    this.cuenta();
  }

  stop(): void {
    
  }

  async cuenta(){
    while(true){
      this.numero++;      
      await this.esperar(1000);
    }
  }

  record(){
    this.numero.toString
  }

  esperar(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  irMenu() {
    this.router.navigate(['/Menu']);
  }
}
