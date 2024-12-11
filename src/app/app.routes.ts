import { RouterModule, Routes } from '@angular/router';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SaludoComponent } from './saludo/saludo.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [    
    { path:'', component: MenuComponent},
    { path:'Cronometro', component: CronometroComponent },
    { path:'Saludo', component: SaludoComponent },
    { path:'Menu', component: MenuComponent },
    { path:'**', component: NotFoundComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
