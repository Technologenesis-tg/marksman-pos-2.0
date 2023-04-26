import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './components/user/user.component';
import { GamesComponent } from './components/games/games.component';
import { PaintballComponent } from './components/paintball/paintball.component';
import { IndoorCricketComponent } from './components/indoor-cricket/indoor-cricket.component';
import { GelblasterComponent } from './components/gelblaster/gelblaster.component';
import { BadmintonComponent } from './components/badminton/badminton.component';
import { FutsalComponent } from './components/futsal/futsal.component';
import { ArcheryComponent } from './components/archery/archery.component';
import { AirsoftComponent } from './components/airsoft/airsoft.component';
import { BookingsComponent } from './components/bookings/bookings.component';



const routes: Routes = [
  {
    path:'',component:HomeComponent , canActivate: [AuthGuard]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'user',component:UserComponent , canActivate: [AuthGuard]
  }
  ,
  {
    path:'Games',component:GamesComponent , canActivate: [AuthGuard]
  }
  ,
  {
    path:'Paintball',component:PaintballComponent , canActivate: [AuthGuard]
  }
  ,
  {
    path:'Indoor-Cricket',component:IndoorCricketComponent , canActivate: [AuthGuard]
  }
  ,
  {
    path:'Gel-Blaster',component:GelblasterComponent , canActivate: [AuthGuard]
  }
  ,
  {
    path:'Badminton',component:BadmintonComponent , canActivate: [AuthGuard]
  }
  ,
  {
    path:'Futsal',component:FutsalComponent , canActivate: [AuthGuard]
  }
  ,
  {
    path:'Archery',component:ArcheryComponent , canActivate: [AuthGuard]
  }
  ,
  {
    path:'Airsoft-Range',component:AirsoftComponent , canActivate: [AuthGuard]
  }
  ,
  {
    path:'Bookings',component:BookingsComponent , canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
