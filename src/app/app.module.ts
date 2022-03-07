import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { appRoutingProviders, routing } from './app.routing';
import {routing,appRoutingProviders} from "./app.routing";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ErrorComponent } from './components/error/error.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { PeliculaDetalleComponent } from './components/pelicula/pelicula-detalle/pelicula-detalle.component';
import {MenuItem} from 'primeng/api';    
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    PeliculaComponent,
    ErrorComponent,
    PeliculaDetalleComponent,
    PruebaComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    InputNumberModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
