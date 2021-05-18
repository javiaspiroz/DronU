import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { VentaComponent } from './components/venta/venta.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full"},
  { path: 'alquiler', component: AlquilerComponent, pathMatch:"full"},
  { path: 'perfil', component: PerfilComponent, pathMatch:"full"},
  { path: 'producto', component: ProductoComponent, pathMatch:"full"},
  { path: 'venta', component: VentaComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
