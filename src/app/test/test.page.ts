import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private iab:InAppBrowser) { 
  }

  ngOnInit() {
  }

  onClick(){
    this.iab.create('https://www.google.com','_blank');
  }

  onClickSelf(){
    this.iab.create('https://www.google.com','_self');
  }

  onClickBlank(){
    this.iab.create('https://www.google.com');
  }
}
