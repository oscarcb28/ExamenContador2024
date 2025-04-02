import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent {
clicked: any;

  constructor(private router: Router) {}

  
  segundos:number = 0;
  minutos:number = 0;
  horas:number = 0;

  listaTiempos:[]=[]

  play(): void {
    this.cuenta();
    
  }

  stop(): void {
    this.cuenta();
  }

  async cuenta(){
    while(true){   
      this.segundos++;
      if (this.segundos == 60){
        this.segundos = 0;
        this.minutos++;
        if (this.minutos == 60){
          this.minutos = 0;
          this.horas++;
        }
      }      
      await this.esperar(1000);               
    }
  }
  
  record(){
    this.segundos.toString
    this.minutos.toString
    this.horas.toString
  }

  

  esperar(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  irMenu() {
    this.router.navigate(['/Menu']);
  }
}
