import { Component} from '@angular/core';
import {
  NgForm,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-paintball',
  templateUrl: './paintball.component.html',
  styleUrls: ['./paintball.component.css']
})
export class PaintballComponent {
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
  timeSlots: any = ['12:00 PM', '1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM'];
  availability: { [key: string]: number } = {
    '12:00 PM': 16,
    '1:00 PM': 16,
    '2:00 PM': 16,
    '3:00 PM': 16,
    '4:00 PM': 16,
    '5:00 PM': 16,
    '6:00 PM': 16,
    '7:00 PM': 16,
    '8:00 PM': 16
  };
  selectedTime: any = this.timeSlots[0];
  slots = [
    { id: '0a', value: 0, checked: false },
    { id: '1a', value: 1, checked: false },
    { id: '2a', value: 2, checked: false },
    { id: '3a', value: 3, checked: false },
    { id: '4a', value: 4, checked: false },
    { id: '5a', value: 5, checked: false },
    { id: '6a', value: 6, checked: false },
    { id: '7a', value: 7, checked: false },
    { id: '8a', value: 8, checked: false },
    { id: '9a', value: 9, checked: false },
    { id: '10a', value: 10, checked: false },
    { id: '11a', value: 11, checked: false },
    { id: '12a', value: 12, checked: false },
    { id: '13a', value: 13, checked: false },
    { id: '14a', value: 14, checked: false },
    { id: '15a', value: 15, checked: false },
  ];

  selectedSlots = 0;
  selectedDate: any;
  member_error = false;
  member_error2 = false;
  inputNumber: any;
  isDateSelected = true
  slots_time = false
  divs = false
  selected_date: any;
  time_btn: any = [];
  constructor(public modalService: NgbModal) {
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
  onPreviousClick(){
    this.isDateSelected = true
    this.slots_time = false
  }
  datee:any
  slot_name:any
  open(content: any) {
    let d = {
      date: this.selected_date,
    };
    this.datee = d.date;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',windowClass:'modal-div',centered:true });
    
  }
  addedPlayers = 0
  onSlotChange(){
    let selectedSlots = this.slots.filter(slot => slot.checked);
    console.log(selectedSlots.length);
    this.addedPlayers = selectedSlots.length;
  }
  back_slot(){
    this.slots_time = true
    this.detail = false
    
  }
  arr: any = [];
  arrynumbers: any = [];
  detail = false
  goToNextPage(pageName: string, content: any) {
    this.divs = true;
    this.slots_time = false
    this.detail = true
    this.modalService.dismissAll(content);
}
}
