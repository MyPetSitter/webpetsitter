import { LoginService } from 'src/service/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/views/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from "@angular/common/http";
import { CriarContaComponent } from './components/views/criar-conta/criar-conta.component';
import {MatListModule} from '@angular/material/list';
import { ComoFuncionaComponent } from './components/views/como-funciona/como-funciona.component';
import {MatIconModule} from '@angular/material/icon';
import { QueroSerPetsitterComponent } from './components/views/quero-ser-petsitter/quero-ser-petsitter.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PetsitterPerfilComponent } from './components/views/petsitter-perfil/petsitter-perfil.component';
import { EntrarComponent } from './components/views/entrar/entrar/entrar.component';
import { StorageService } from 'src/service/storage.service';
import { ErrorInterceptorProvider } from './interceptors/error-interceptor';
import { HeaderpsComponent } from './components/template/headerps/headerps/headerps.component';
import { FooterpsComponent } from './components/template/footerps/footerps/footerps.component';
import { NavpsComponent } from './components/template/navps/navps/navps.component';
import { ServicoPetsitterComponent } from './components/views/servico-petsitter/servico-petsitter/servico-petsitter.component';
import { DadosPetsitterComponent } from './components/views/dados-petsitter/dados-petsitter/dados-petsitter.component';
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';
import { UsuarioService } from 'src/service/domain/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CriarContaComponent,
    ComoFuncionaComponent,
    QueroSerPetsitterComponent,
    PetsitterPerfilComponent,
    EntrarComponent,
    HeaderpsComponent,
    FooterpsComponent,
    NavpsComponent,
    ServicoPetsitterComponent,
    DadosPetsitterComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatSlideToggleModule,
  ],
  providers: [
    LoginService,
    UsuarioService,
    StorageService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const appRoutingProviders: any[] = [];
