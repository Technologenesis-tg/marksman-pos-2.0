import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray,FormControl  } from '@angular/forms';
import { DataService } from '../../request.service';
// import * as moment from 'moment';
import {
  NgForm,
} from '@angular/forms';
@Component({
  selector: 'app-indoor-cricket',
  templateUrl: './indoor-cricket.component.html',
  styleUrls: ['./indoor-cricket.component.css']
})
export class IndoorCricketComponent {
  selectedDate: any;
  member_error = false;
  member_error2 = false;
  inputNumber: any;
  isDateSelected = true
  slots_time = false
  selected_date: any;
  detail = false
  discounted_amount:number = 0
  minDate: any;
  roundedTotalPrice:number = 0;
  slots:any;
  price:number = 3999;
  discount:number=0;
  submited:any = false
  slotError :any = false
  isLoading:any = false
  bookingForm:any = FormGroup;
  selectedSlots:any
  date_format:any;
  click: any =  false;
  holdBooking:any = false
  responseData:any
 userDataString = localStorage.getItem('me');
 userData = this.userDataString ? JSON.parse(this.userDataString) : null;
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
  timeSlots:any
  constructor(private fb: FormBuilder,private  api:DataService) {
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate(),
    };
  }
  ngOnInit(): void {

    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_no: ['', Validators.required],
      number_of_player: ['', Validators.required],
      select_date: ['', Validators.required],
      price: ['', Validators.required],
      booked_for: ['', Validators.required],
      expiry_time: [''],
      payment_status: ['Paid', Validators.required],
      book_status: ['Booked', Validators.required],
      discount: ['',],
      user_id: ['', Validators.required],
      type: ['User', Validators.required],
      game_name: ['Cricket', Validators.required],
      subTotal: ['', Validators.required],
      booked_slots_index: this.fb.array([]),
    });

  }
  onDateSelect(event: any, form: NgForm) {

this.isLoading = true

    this.member_error2 = false;
    this.isDateSelected = true;

    this.selected_date =
      this.selectedDate['day'] +
      '/' +
      this.selectedDate['month'] +
      '/' +
      this.selectedDate['year'];


      this.date_format =  `${this.selectedDate['day']}-${this.ms[this.selectedDate['month']]}-${this.selectedDate['year']}`




  this.isDateSelected = false
  this.slots_time = true

  this.getslot();


  }
  onPreviousClick(){
    this.isDateSelected = true
    this.slots_time = false
  }
  next(){
    const slotsArray = this.bookingForm.get('booked_slots_index') as FormArray;

      this.slots_time = false
      this.detail = true

  }
  back(){
    this.slots_time = true
    this.detail = false
  }
  getslot(){
    this.api.post('cricket/slot/timing', {"select_date":this.selected_date})
    .subscribe(
      (response:any) => {
        console.log(response.data);
        this.timeSlots = response.data;
        this.isLoading = false


        // Save token to local storage


      },
      error => {

      }
    );

  }
  onCheckboxChange(event:any, index:any,name:any) {
    const isChecked = event.target.checked;
const slotsArray:any = this.bookingForm.get('booked_slots_index') as FormArray;

if (slotsArray.value.length <= 0){
  this.slotError = true
}else{
  this.slotError = false
}

if (isChecked) {
  const indexExists = slotsArray.controls.some((group:any) => group.get('slotes_id').value === index);

  if (!indexExists) {
    slotsArray.push(this.fb.group({ slotes_id: [index], name: [name] }));
  }
}
 else {
  const indexToRemove = slotsArray.controls.findIndex((control:any) => control.value.slotes_id === index);
  if (indexToRemove >= 0) { slotsArray.removeAt(indexToRemove); }
}
this.selectedSlots = slotsArray



this.calculate_discount(0);

  }
  roundedHours:any;

  onSubmit(){
this.submited = true
if(this.bookingForm.invalid){
  return;
}
if(this.bookingForm.value.book_status == 'Hold'){
const selected_slots = this.selectedSlots.value.sort((a:any, b:any) => b.id - a.id)
 const testDate = `${this.selected_date} ${selected_slots[0].name}`
 const currentDate = new Date(); // current date
 const dateString = testDate; // given date string
 const dateParts = dateString.split(/[\s/:]+/);
 const [day, month, year, hours, minutes] = dateParts.map(Number);
 const givenDate = new Date(year, month - 1, day, hours + (dateParts[4] === 'PM' && hours !== 12 ? 12 : 0), minutes); // given date
 const diffInMs = givenDate.getTime() - currentDate.getTime();
 const roundedHours = Math.floor(diffInMs / (1000 * 60 * 60));
console.log(roundedHours);
48<=roundedHours?this.roundedHours=24:36<=roundedHours?this.roundedHours=12:24<=roundedHours?this.roundedHours=8:12<=roundedHours?this.roundedHours=6:6<=roundedHours?this.roundedHours=4:2<=roundedHours&&(this.roundedHours=1);
 const date = new Date(currentDate.setHours(currentDate.getHours() + this.roundedHours));
 const formattedDate = date.toLocaleString('en-US', {
   day: 'numeric',
   month: 'numeric',
   year: 'numeric',
   hour: 'numeric',
   minute: 'numeric',
   second: 'numeric',
   hour12: true
 });
   this.bookingForm.patchValue({
    "expiry_time" : formattedDate
  })
  console.log(this.bookingForm);
}
console.log(10)
this.api.post('cricket/booked', this.bookingForm.value)
.subscribe(
  (response:any) => {
    if(response.data[0].book_status == 'Hold'){
      this.responseData = response.data[0]
      this.holdBooking = true
    }else{
      this.onPrint('sectionToPrint');
      window.location.reload();
    }
  },
  error => {
  }
);
}
calculate_discount(event:any){

  const slots_count =this.bookingForm.get('booked_slots_index').length;
  const dis = event?.target?.value || 0;

  const pricePerHour = this.price;
  const subTotal = pricePerHour * slots_count;
  const discount = subTotal * (dis / 100);
  const totalPrice = Math.round(subTotal - discount);
  this.discounted_amount = Math.round(discount);
  this.roundedTotalPrice = Math.round(totalPrice * 100) / 100;
  this.bookingForm.patchValue({
    booked_for: `${slots_count} hours`,
    discount: dis,
    price: this.roundedTotalPrice,
    select_date: this.selected_date,
    subTotal: subTotal,
    user_id: this.userData.id
  });


}

onPrint(divName:any) {




    const element = document.getElementById(divName);
  if (element !== null) {
    const printContents = element.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    // window.location.reload();

  } else {
    console.error(`Element with ID ${divName} not found!`);
  }
   }

   isSelected(slot:any) {

    let isSelected = false;
    let arr = this.selectedSlots ? this.selectedSlots.value : [];

    arr.forEach((element:any) => {
      if (element.slotes_id == slot.id) {
        isSelected = true;
      }
    });

    return isSelected;
  }


}
