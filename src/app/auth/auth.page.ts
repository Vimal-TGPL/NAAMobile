import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage  {

  passwordType: string= 'password';
  passwordShown: boolean = false;
  passwordName: string= 'eye-off';
  uname: string = "";
  pass: string = "";

  constructor(private menuctrl:MenuController, public alertctrl : AlertController,private router:Router) {
  }

  public togglePassword(){
    if(this.passwordShown)
    {
      this.passwordShown = false;
      this.passwordType = 'password';
      this.passwordName = 'eye-off';
    }else
    {
      this.passwordShown=true;
      this.passwordType='text';
      this.passwordName = 'eye';
    }
  }

  async login(){
    if(this.uname === "admin" && this.pass === "admin")
    {
      this.router.navigateByUrl('/landing');
    }else{
      const alert= await this.alertctrl.create({
        header:'Message',
        message:'UserName or Password is incorrect',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
