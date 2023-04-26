import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DataService} from '../../request.service'


@Component({
  selector: 'app-gelblaster',
  templateUrl: './gelblaster.component.html',
  styleUrls: ['./gelblaster.component.css']
})
export class GelblasterComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder , private request:DataService) {
    this.bookingForm = this.fb.group({
      name: '',
      phone_no: '',
      number_of_player: '',
      discount: '',
      subTotal: '0',
      game_name:'Gelblaster',
      price:'0',
      type:'',
      user_id:'',
      payment_status: "paid",
      book_status: "Booked",
    });
  }

  players(){
    this.bookingForm.patchValue({
      subTotal: this.bookingForm.value.number_of_player * 199
    });
    this.discount()
  }

  discount(){
    const discountedAmount = Math.round(this.calculateDiscount(this.bookingForm.value.subTotal, this.bookingForm.value.discount))
    this.bookingForm.patchValue({
      price: discountedAmount,
    });
  }

  onSubmit() {
    const user = localStorage.getItem('me')
    this.bookingForm.patchValue({
      type:'Employee',
      user_id:JSON.parse(user!).id
    });
    this.request.post('gelblaster/slot/booked',this.bookingForm.value ).subscribe(res=>{
      console.log(res)
      this.onPrint('sectionToPrint');
    })
  }
  calculateDiscount(subtotal: number, discountPercentage: number): number {
    const discountAmount = subtotal * (discountPercentage / 100);

    return subtotal - discountAmount;
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
}
