import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx'
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-japan',
  templateUrl: './japan.page.html',
  styleUrls: ['./japan.page.scss'],
})
export class JapanPage implements OnInit {
  APIUrl = "https://api.newagealpha.com/api/Indexes/GetIndexDetails";
  performanceAPIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexPerformance';
  somedata: any;
  selectedproduct: string = null;
  indexdetails: any = [];
  performancedetails: any = [];
  desc: any = null;
  filteredvalue: any;
  anotherdata: any;
  inceptionDate: any;
  count: any = 0;
  japan: any = [];
  value: any = null;
  daily: any;
  ytd: any;
  year1: any;
  year3: any;
  year5: any;
  year10: any;
  cum: any;
  ann: any;
  y2018: any;
  y2017: any;
  y2016: any;
  y2015: any;
  y2014: any;
  y2013: any;
  y2012: any;
  y2011: any;
  y2010: any;
  y2009: any;
  ondate: any;
  tem: any;
  loading:any;
  hide:any=false;

  constructor(private httpnative: HTTP, private loadingController:LoadingController) {

  }

  ngOnInit() {
    this.presentLoading();
    this.getnativeindexdetails();
  }

  getnativeindexdetails() {

    this.httpnative.get(this.performanceAPIUrl, {}, {}).then((data) => {
      this.anotherdata = JSON.parse(data.data);
      this.httpnative.get(this.APIUrl, {}, {}).then((data) => {
        this.somedata = JSON.parse(data.data);
        for (let data of this.somedata) {
          if (JSON.stringify(data.indexName).indexOf("Japan") !== -1) {
            this.japan[this.count] = data.indexName;
            this.count = this.count + 1;
          }
        }
        this.selectedproduct = this.japan[0];
      });
      this.loading.dismiss().then(()=>{
        this.hide=true;
      });
    });
  }
  onProductChange(prod) {
    this.tem = prod.detail.value;
    this.onChange();
  }

  onChange() {
    this.indexdetails = this.somedata.filter((item) => item.indexName === this.tem);
    this.desc = this.indexdetails.map((x) => {
      return x.description;
    })
    this.performancedetails = this.anotherdata.filter((item) => item.indexName === this.tem);
    this.value = this.performancedetails.map((x) => {
      return x.value;
    })
    this.value = this.roundValue(this.value);
    this.inceptionDate = this.performancedetails.map((x) => {
      return x.inception;
    })
    this.ondate = this.performancedetails.map((x) => {
      return x.date;
    })
    this.daily = this.performancedetails.map((x) => {
      return x.dailyReturn;
    })
    this.daily = this.daily * 100;
    this.daily = this.roundValue(this.daily);
    this.ytd = this.performancedetails.map((x) => {
      return x.ytdReturn;
    })
    this.ytd = this.ytd * 100;
    this.ytd = this.roundValue(this.ytd);
    this.year1 = this.performancedetails.map((x) => {
      return x.y1Return;
    })
    this.year1 = this.year1 * 100;
    this.year1 = this.roundValue(this.year1);
    this.year3 = this.performancedetails.map((x) => {
      return x.y3Return;
    })
    this.year3 = this.year3 * 100;
    this.year3 = this.roundValue(this.year3);
    this.year5 = this.performancedetails.map((x) => {
      return x.y5Return;
    })
    this.year5 = this.year5 * 100;
    this.year5 = this.roundValue(this.year5);
    this.year10 = this.performancedetails.map((x) => {
      return x.y10Return;
    })
    this.year10 = this.year10 * 100;
    this.year10 = this.roundValue(this.year10);
    this.cum = this.performancedetails.map((x) => {
      return x.cumReturns;
    })
    this.cum = this.cum * 100;
    this.cum = this.roundValue(this.cum);
    this.ann = this.performancedetails.map((x) => {
      return x.annReturns;
    })
    this.ann = this.ann * 100;
    this.ann = this.roundValue(this.ann);
    this.y2018 = this.performancedetails.map((x) => {
      return x.year1;
    })
    this.y2018 = this.y2018 * 100;
    this.y2018 = this.roundValue(this.y2018);
    this.y2017 = this.performancedetails.map((x) => {
      return x.year2;
    })
    this.y2017 = this.y2017 * 100;
    this.y2017 = this.roundValue(this.y2017);
    this.y2016 = this.performancedetails.map((x) => {
      return x.year3;
    })
    this.y2016 = this.y2016 * 100;
    this.y2016 = this.roundValue(this.y2016);
    this.y2015 = this.performancedetails.map((x) => {
      return x.year4;
    })
    this.y2015 = this.y2015 * 100;
    this.y2015 = this.roundValue(this.y2015);
    this.y2014 = this.performancedetails.map((x) => {
      return x.year5;
    })
    this.y2014 = this.y2014 * 100;
    this.y2014 = this.roundValue(this.y2014);
    this.y2013 = this.performancedetails.map((x) => {
      return x.year6;
    })
    this.y2013 = this.y2013 * 100;
    this.y2013 = this.roundValue(this.y2013);
    this.y2012 = this.performancedetails.map((x) => {
      return x.year7;
    })
    this.y2012 = this.y2012 * 100;
    this.y2012 = this.roundValue(this.y2012);
    this.y2011 = this.performancedetails.map((x) => {
      return x.year8;
    })
    this.y2011 = this.y2011 * 100;
    this.y2011 = this.roundValue(this.y2011);
    this.y2010 = this.performancedetails.map((x) => {
      return x.year9;
    })
    this.y2010 = this.y2010 * 100;
    this.y2010 = this.roundValue(this.y2010);
    this.y2009 = this.performancedetails.map((x) => {
      return x.year10;
    })
    this.y2009 = this.y2009 * 100;
    this.y2009 = this.roundValue(this.y2009);
    var temp = JSON.stringify(this.desc);
    var sm = "SM";
    var replaceText = "Index" + sm.sup();
    temp = temp.replace(/IndexSM/gm, replaceText);
    this.desc = JSON.parse(temp);
  }

  roundValue(val) {
    return Math.round(val * 100) / 100;
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Loading...',
    });
    return this.loading.present();
  }
}
