import { Component,viewChild, ElementRef } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-contact',
  imports: [FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // isHide:boolean=true;


  userName: string = '';
  userAge: string = '';
  userEmail: string = '';
  userPassword: string = '';

  // downClock(elemnt:EventTarget|null):void{
  //   console.log(elemnt)
  //   if(elemnt!=null){
  //     this.isHide=false
      
  //   }
  //   }
  
}
