import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { FootballersService } from './services/footballers/footballers.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FootballerListComponent } from './footballer-list/footballer-list.component';
import { FootballerNewComponent } from './footballer-new/footballer-new.component';
import { FootballerUpdateComponent } from './footballer-update/footballer-update.component';
import { FootballerComponent } from './footballer/footballer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FootballerListComponent,
    FootballerNewComponent,
    FootballerUpdateComponent,
    FootballerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    FootballersService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
