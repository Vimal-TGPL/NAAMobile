import { Component, OnInit } from '@angular/core';

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
