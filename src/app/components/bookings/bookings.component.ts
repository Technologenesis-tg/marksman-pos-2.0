import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  paintballz = true
  cricketz = false
  gelz = false
  archeryz = false
  futsalz = false
  badmintonz = false
  airsoftz = false
  title:any = "paintball"
  paintball(){
    this.paintballz = true
    this.cricketz = false
    this.gelz = false
    this.archeryz = false
    this.futsalz = false
    this.badmintonz = false
    this.airsoftz = false
    this.title = "paintball"
  }
  cricket(){
    this.cricketz = true
    this.gelz = false
    this.archeryz = false
    this.futsalz = false
    this.badmintonz = false
    this.airsoftz = false
    this.paintballz = false
    this.title = "indoor cricket"

  }
  gel(){
    this.cricketz = false
    this.gelz = true
    this.archeryz = false
    this.futsalz = false
    this.badmintonz = false
    this.airsoftz = false
    this.paintballz = false
    this.title = "gel blaster"
  }
  badminton(){
    this.cricketz = false
    this.gelz = false
    this.archeryz = false
    this.futsalz = false
    this.badmintonz = true
    this.airsoftz = false
    this.paintballz = false
    this.title = "badminton"
  }
  archery(){
    this.cricketz = false
    this.gelz = false
    this.archeryz = true
    this.futsalz = false
    this.badmintonz = false
    this.airsoftz = false
    this.paintballz = false
    this.title = "archery"
  }
  futsal(){
    this.cricketz = false
    this.gelz = false
    this.archeryz = false
    this.futsalz = true
    this.badmintonz = false
    this.airsoftz = false
    this.paintballz = false
    this.title = "futsal"
  }
  airsoft(){
    this.cricketz = false
    this.gelz = false
    this.archeryz = false
    this.futsalz = false
    this.badmintonz = false
    this.airsoftz = true
    this.paintballz = false
    this.title = "airsoft range"
  }
  
}
