import { DadosPetsitterComponent } from './components/views/dados-petsitter/dados-petsitter/dados-petsitter.component';
import { ServicoPetsitterComponent } from './components/views/servico-petsitter/servico-petsitter/servico-petsitter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoFuncionaComponent } from './components/views/como-funciona/como-funciona.component';
import { CriarContaComponent } from './components/views/criar-conta/criar-conta.component';
import { EntrarComponent } from './components/views/entrar/entrar/entrar.component';
import { HomeComponent } from './components/views/home/home.component';
import { PetsitterPerfilComponent } from './components/views/petsitter-perfil/petsitter-perfil.component';
import { QueroSerPetsitterComponent } from './components/views/quero-ser-petsitter/quero-ser-petsitter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'entrar',
    component: EntrarComponent
  },
  {
    path: 'criarconta',
    component: CriarContaComponent
  },
  {
    path: 'comofunciona',
    component: ComoFuncionaComponent
  },
  {
    path: 'queroserpetsitter',
    component: QueroSerPetsitterComponent
  },
  {
    path: 'dashboard',
    component: PetsitterPerfilComponent
  },
  {
    path: 'meusservicos',
    component: ServicoPetsitterComponent
  },
  {
    path: 'meusdados',
    component: DadosPetsitterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }