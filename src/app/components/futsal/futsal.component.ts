import { Component } from '@angular/core';
import {
  NgForm,
} from '@angular/forms';
@Component({
  selector: 'app-futsal',
  templateUrl: './futsal.component.html',
  styleUrls: ['./futsal.component.css']
})
export class FutsalComponent {
  selectedDate: any;
  member_error = false;
  member_error2 = false;
  inputNumber: any;
  isDateSelected = true
  slots_time = false
  selected_date: any;
  detail = false
  minDate: any;
  ms = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  constructor() {
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate(),
    };
  }
  onDateSelect(event: any, form: NgForm) {
    if (form.invalid) {
      this.member_error2 = true;
      
      return;
    }
    
    this.member_error2 = false;
    this.isDateSelected = true;
    this.selected_date =
      this.selectedDate['day'] +
      '-' +
      this.selectedDate['month'] +
      '-' +
      this.selectedDate['year'];

  console.log(this.selected_date)
  console.log(this.inputNumber)
  this.isDateSelected = false
  this.slots_time = true
  }
  backHome(){
  this.isDateSelected = true
  this.slots_time = false
} 
next(){
    this.slots_time = false
    this.detail = true
  }
  backs(){
    this.slots_time = true
    this.detail = false
  }
}
