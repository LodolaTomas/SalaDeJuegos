import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/component/home/home.component';
import { ChatComponent } from './component/chat/chat.component';
import { QuiensoyComponent } from './component/quiensoy/quiensoy.component';


const routes: Routes = [
  {path:'login',loadChildren: ()=> import('./ingreso/login/login.module').then((m)=>m.LoginModule),},
  {path:'register',loadChildren: ()=> import('./ingreso/register/register.module').then((m)=>m.RegisterModule),},
  { path: 'home', component: HomeComponent },
  { path: 'quiensoy',component: QuiensoyComponent},
  { path: 'chat', component:ChatComponent},
  { path: '',redirectTo: '/login', pathMatch: 'full' },
  { path: '**',redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
