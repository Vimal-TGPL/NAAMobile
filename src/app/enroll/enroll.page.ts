import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService} from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import {Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.page.html',
  styleUrls: ['./enroll.page.scss'],
})
export class EnrollPage implements OnInit {
  check:boolean = false;
  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
   // const Regex_email = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
    this.registerForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z\-\']+')]),
      LastName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z\-\']+')]),
      //Email: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.pattern(Regex_email)]),
      Email: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(6)]),
      selectFormControl: new FormControl('', [Validators.required]),
      Checkbox: new FormControl('', [Validators.required]),
      //Phoneno: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      //Message: new FormControl('', [Validators.required, Validators.maxLength(255), Validators.pattern('')])
  });
  }

checkboxClick(){
if(this.check === false){
this.check = true;
}else if(this.check === true){
this.check = false;
}
}

postRegister(){
  if(this.registerForm.valid){
    let formDetails: User = {
      FirstName: this.registerForm.controls["FirstName"].value,
      LastName: this.registerForm.controls["LastName"].value,
      Username: this.registerForm.controls["Email"].value,
      Password: this.registerForm.controls["Password"].value,
      InvestorType: this.registerForm.controls["selectFormControl"].value,
      Email: this.registerForm.controls["Email"].value,
      IsPolicyAccepted: this.registerForm.controls["Checkbox"].value==true?'Y':'N',
      Token:""
    }

    console.log(formDetails);
  }
}
}
