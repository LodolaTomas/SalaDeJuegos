import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/component/home/home.component';
import { ChatComponent } from './component/chat/chat.component';
import { MemotestComponent } from './component/memotest/memotest.component';
import { TatetiComponent } from './component/juegos/tateti/tateti.component';
import { PiedraPapeloTijeraComponent } from './component/juegos/piedra-papelo-tijera/piedra-papelo-tijera.component';
import { QuiensoyComponent } from './component/quiensoy/quiensoy.component';
import { EncuestaComponent } from './component/encuesta/encuesta.component';
import { BuscaminasComponent } from './component/juegos/buscaminas/buscaminas.component';
const routes: Routes = [
  {path:'login',loadChildren: ()=> import('./ingreso/login/login.module').then((m)=>m.LoginModule),},
  {path:'register',loadChildren: ()=> import('./ingreso/register/register.module').then((m)=>m.RegisterModule),},
  {path: 'home', component: HomeComponent},
  {path: 'tictactoe', component: TatetiComponent},
  {path: 'quiensoy',component: QuiensoyComponent},
  {path:'memotest',component:MemotestComponent},
  { path: 'chat', component:ChatComponent},
  {path:'piedrapapeltijera',component:PiedraPapeloTijeraComponent},
  {path: 'encuesta',component:EncuestaComponent},
  {path:'buscaminas',component:BuscaminasComponent},
  {path: '',redirectTo: '/login', pathMatch: 'full' },
  {path: '**',redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
