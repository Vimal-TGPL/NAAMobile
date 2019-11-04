import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService} from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.page.html',
  styleUrls: ['./enroll.page.scss'],
})
export class EnrollPage implements OnInit {
  check:boolean = false;

  constructor() { }

  ngOnInit() {
  }

checkboxClick(){
if(this.check === false){
this.check = true;
}else if(this.check === true){
this.check = false;
}
}

}
