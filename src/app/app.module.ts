import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgbNavModule,NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPrintElementModule } from 'ngx-print-element';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from '@angular/common';
import { GamesComponent } from './components/games/games.component';
import { PaintballComponent } from './components/paintball/paintball.component';
import { IndoorCricketComponent } from './components/indoor-cricket/indoor-cricket.component';
import { GelblasterComponent } from './components/gelblaster/gelblaster.component';
import { BadmintonComponent } from './components/badminton/badminton.component';
import { FutsalComponent } from './components/futsal/futsal.component';
import { ArcheryComponent } from './components/archery/archery.component';
import { AirsoftComponent } from './components/airsoft/airsoft.component';
import { BookingsComponent } from './components/bookings/bookings.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    FooterComponent,
    GamesComponent,
    PaintballComponent,
    IndoorCricketComponent,
    GelblasterComponent,
    BadmintonComponent,
    FutsalComponent,
    ArcheryComponent,
    AirsoftComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    NgbDatepickerModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule ,
    NoopAnimationsModule ,
    ToastrModule.forRoot(),
    [NgbNavModule],
  ],

  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
