import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { QuiensoyComponent } from './component/quiensoy/quiensoy.component';
import { ChatComponent } from './component/chat/chat.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TictactoeComponent } from './component/tictactoe/tictactoe.component';
import { PiedrapapeltijeraComponent } from './component/piedrapapeltijera/piedrapapeltijera.component';
import { RouterModule } from '@angular/router';
import { MemotestComponent } from './component/memotest/memotest.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, QuiensoyComponent, ChatComponent, NavBarComponent, TictactoeComponent, PiedrapapeltijeraComponent, MemotestComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
