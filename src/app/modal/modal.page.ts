import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  companyname : any;
  indexname:any;
  APIurl = 'https://api.newagealpha.com/api/Scores/GetNAAIndexScoresCurrent/GLOBAL';
  somedata:any;
  companydetails:any;
  tradedate:any;
  stockkey:any;
  scores:any;
  ticker:any;
  country:any;
  industry:any;
  isin:any;
  marketcap:any;
  hide:any=false;
  loading :any;

  constructor( private activatedRoutes:ActivatedRoute, private httpnative:HTTP, private loadingController:LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.companyname = this.activatedRoutes.snapshot.paramMap.get('comval');
    this.indexname = this.activatedRoutes.snapshot.paramMap.get('indexval');
    this.httpnative.get(this.APIurl,{},{}).then((data)=>{
      this.somedata = JSON.parse(data.data);
      this.companydetails = this.somedata.filter((item) => item.companyName === this.companyname && item.indexName === this.indexname);
    this.tradedate = this.companydetails.map((x)=>{
      var str = JSON.stringify(x.tradeDate)
      var year = str.slice(1,5);
    var month = str.slice(5,7);
    var day = str.slice(7,9);
    var date = month+"/"+day+"/"+year;
      return date;
    });
    this.stockkey = this.companydetails.map((x)=>{
      if(x.stockKey === null){
        return "-"
      }
      else{
        return x.stockKey;
      }
      
    });
    this.scores = this.companydetails.map((x)=>{
      if(x.scores === null){
        return "-"
      }
      else{
        return x.scores;
      }
      
    });
    this.ticker = this.companydetails.map((x)=>{
      if(x.ticker === null){
        return "-"
      }
      else{
        return x.ticker;
      }
      
    });
    this.country =this.companydetails.map((x)=>{
      if(x.country === null){
        return "-"
      }
      else{
        return x.country;
      }
      
    });
    this.industry = this.companydetails.map((x)=>{
      if(x.industry === null){
        return "-"
      }
      else{
        return x.industry;
      }
      
    });
    this.isin = this.companydetails.map((x)=>{
      if(x.isin === null){
        return "-"
      }
      else{
        return x.isin;
      }
    });
    this.marketcap = this.companydetails.map((x)=>{
      if(x.marketCap === null){
        return "-"
      }
      else{
        return x.marketCap;
      }
    });
    this.scores = this.percentConvertion(this.scores);
    this.loading.dismiss().then(()=>{
      this.hide = true;
    })
    });
    // if(this.ticker!= null){
    //   this.loading.dismiss().then(res=>{
    //     this.hide=true;
    //   })
    // }
  }

  percentConvertion(val) {
    return Math.round(val * 1000) / 10;
  }

  async presentLoading() {
   this.loading = await this.loadingController.create({
      message: 'Loading...',
      //cssClass:'lds-facebook'
    });
    return this.loading.present();
  }
}
