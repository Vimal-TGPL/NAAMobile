import { Component, OnInit, ViewChild } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { uptime } from 'os';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  APIUrl = "https://api.newagealpha.com/api/Scores/GetNAAIndexScoresCurrent/GLOBAL";
  public somedata: any;
  groupArray = require('group-array');
  arr: any = [];
  companyname: any;
  selectedcom: any = null;
  anotherdata: any;
  firstdata: any;
  isItemAvailable = false;
  selectedindex: any;
  hide:any = true;
  searchdata:any = [];
  temp:any = [];
  n:any ;
  disabled:any;
  comicon:any = "arrow-round-up";
  selectedsort:any = "score";
  flag=1;



  constructor(private httpnative: HTTP, private modalController: ModalController, private router: Router) {
  }

  ngOnInit() {
    this.getScoreDetail();
  }

  getScoreDetail() {
    let that = this;
    this.httpnative.get(this.APIUrl, {}, {}).then((data) => {
      that.somedata = JSON.parse(data.data);
      this.somedata = this.somedata.filter(function(value, index, self){
        return self.indexOf(value) === index;
      })
      that.arr = that.somedata.map(x => x.indexName);
      that.arr = that.arr.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      this.selectedcom = this.arr[0];
      this.searchdata = this.somedata;
    });
  }

  percentConvertion(val) {
    return Math.round(val * 1000) / 10;
  }

  onClick(comval, indexval) {
    this.router.navigate(['modal', comval, indexval]);
  }

  onSlectorSelect(comp) {
    this.firstdata = this.somedata.filter((item) => item.indexName === comp.detail.value);
    this.temp.length = 0;
    this.addMoreItems();
    this.disabled = false;
  }

  initializeData() {
    this.searchdata = this.somedata;
  }

  search(event) {
    this.initializeData();
    if (event.target.value.length != 0) {
      const query = event.target.value.toLowerCase();
      if (query && query.trim() != '') {
        if(this.hide === true)
        {
          this.hide = false;
        }
        this.isItemAvailable = true;
        this.searchdata = this.searchdata.filter((item) => {
          return (item.companyName.toLowerCase().indexOf(query.toLowerCase()) > -1) || (item.ticker.toLowerCase().indexOf(query.toLowerCase()) > -1);
        })
      }
    }else{
      this.hide = true;
      
    }
  }

  loadData(event){
    setTimeout(()=>{
      this.addMoreItems();
      event.target.complete();
      if(this.temp.length === this.firstdata.length){
        this.disabled = true;
      }
    },1000);
  }

  addMoreItems(){
    let len = this.temp.length;
    let remainig = this.firstdata.length - len;
    if(remainig > 50)
    { this.n = len+50;
    }else{
      this.n = len+remainig;
    }
      for(let i= len; i < this.n ;i++ ){
        this.temp.push(this.firstdata[i]);
      }
  }

  segmentChanged(event){
    
    if(this.flag == 1)
    {
      this.comicon = "arrow-round-down";
      this.flag+=1;
    }else if(this.flag ==2){
      this.comicon = "arrow-round-up";
      this.flag-=1;
    }
    //else if(this.comicon = "arrow-round-down"){
    //   this.comicon = "arrow-round-up";
    //}
    
  }
}