import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { CuentaRegistradaComponent } from './components/cuenta-registrada/cuenta-registrada.component';
import { AuthGuard } from './auth.guard';
import {HttpClientModule} from '@angular/common/http';
const routes: Routes = [
  {path:'', component:PaginaPrincipalComponent},
  {path: 'login', component:LoginComponent},
  { path: 'Perfil', component: CuentaRegistradaComponent,
  canActivate: [AuthGuard], 
},
  
  

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectosComponent,
    LoginComponent,
    PaginaPrincipalComponent,
    CuentaRegistradaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
