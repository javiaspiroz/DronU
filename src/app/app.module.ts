import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { VentaComponent } from './components/venta/venta.component';
import { ImagenDronComponent } from './components/imagen-dron/imagen-dron.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MdbModule } from 'mdb-angular-ui-kit';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProductoComponent,
    PerfilComponent,
    AlquilerComponent,
    VentaComponent,
    ImagenDronComponent,
    CarritoComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MdbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
