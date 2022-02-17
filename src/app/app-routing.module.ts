import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AccesoComponent } from './views/acceso/acceso.component';
import { EscuelaComponent } from './views/escuela/escuela.component';
import { BandasComponent } from './views/bandas/bandas.component';
import { ContactoComponent } from './views/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'acceso', component: AccesoComponent },
  { path: 'escuela', component: EscuelaComponent },
  { path: 'bandas', component: BandasComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
