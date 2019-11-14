import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService} from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import {Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.page.html',
  styleUrls: ['./enroll.page.scss'],
})
export class EnrollPage implements OnInit {
  check:boolean;
  registerForm: FormGroup;

  constructor(public userService: UserService,public alertctrl : AlertController, public http: HttpClient, private router:Router, public nativehttp: HTTP) { }

  ngOnInit() {
   // const Regex_email = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
    this.registerForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern('^[a-zA-Z ]+')]),
      LastName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]+')]),
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
      let postData = {
      "firstName": this.registerForm.controls["FirstName"].value,
      "lastName": this.registerForm.controls["LastName"].value,
      "username": this.registerForm.controls["Email"].value,
      "password": this.registerForm.controls["Password"].value,
      "investorType": this.registerForm.controls["selectFormControl"].value,
      "email": this.registerForm.controls["Email"].value,
      "isPolicyAccepted": this.registerForm.controls["Checkbox"].value==true?'Y':'N',
      "isEmailVerified": "N",
    }

    console.log(postData);
    return this.http.post("https://demo-api.newagealpha.com/api/Users/register",postData,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .map(response=>response)
     .subscribe(async (data:any)=>{
       console.log(data);
       const alert= await this.alertctrl.create({
         header:'Message',
         message:'mail sent',
         buttons: ['OK']
       });
       await alert.present();
     },async error =>{
       console.log(error);
       const alert= await this.alertctrl.create({
         header:'Message',
         message:"error",
         buttons: ['OK']
       });
       await alert.present();
     })
  }
}

gotoLogin(){
  this.router.navigateByUrl('/auth');
}

onchange(e:any){
  console.log(e.detail.checked);
  console.log(this.registerForm.valid);
  this.check=e.detail.checked;
}

}