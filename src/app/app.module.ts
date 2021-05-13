import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { QuiensoyComponent } from './component/quiensoy/quiensoy.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemotestComponent } from './component/memotest/memotest.component';
import { CommonModule } from '@angular/common';
import { TatetiComponent } from './component/juegos/tateti/tateti.component';
import { ChatComponent } from './component/chat/chat.component';
import { JuegosComponent } from './component/juegos/juegos.component';
import { PiedraPapeloTijeraComponent } from './component/juegos/piedra-papelo-tijera/piedra-papelo-tijera.component';
import { EncuestaComponent } from './component/encuesta/encuesta.component';
import { BuscaminasComponent } from './component/juegos/buscaminas/buscaminas.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, QuiensoyComponent, ChatComponent, NavBarComponent, TatetiComponent, MemotestComponent,PiedraPapeloTijeraComponent,JuegosComponent, EncuestaComponent, BuscaminasComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
