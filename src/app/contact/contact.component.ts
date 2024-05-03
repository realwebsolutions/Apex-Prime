import { Component } from '@angular/core';
import { Database, get, onValue, ref, set, update } from '@angular/fire/database';
import { FormControl,FormsModule,  FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  messageform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    school: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  
  });
constructor(private database: Database){

}
sendmessage(formValues: any){

  if (formValues.name === '') {
    alert('Please enter name');
    return;
  }
  if (formValues.school === '') {
    alert('Please enter School/College Name');
    return;
  }
  if (formValues.phon === '') {
    alert('Please enter Phone Number / email');
    return;
  }
  set(ref(this.database,'users/'+ formValues.name),{
    phone : formValues.phone,
    name : formValues.name,
    school : formValues.school,
    message : formValues.message,
 

  })
  alert('Message send Succesfully');
  this.messageform.reset();

          
 
 

}

}
