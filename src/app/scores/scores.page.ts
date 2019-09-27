import { Component, OnInit, ViewChild } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

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
  hide: any = true;
  searchdata: any = [];
  temp: any = [];
  n: any;
  disabled: any;
  comicon: any = "arrow-round-up";
  scoreicon: any = "arrow-round-Down";
  comiconhide: any = false;
  sourceiconhide: any = true;
  selectedsort: any = "score";
  comflag: any = 1;
  scoreflag: any = 1;



  constructor(private httpnative: HTTP, private modalController: ModalController, private router: Router) {
  }

  ngOnInit() {
    this.getScoreDetail();
  }

  getScoreDetail() {
    let that = this;
    this.httpnative.get(this.APIUrl, {}, {}).then((data) => {
      that.somedata = JSON.parse(data.data);
      this.somedata = this.somedata.filter(function (value, index, self) {
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
    this.firstdata.sort((a, b) => {
      return a.scores - b.scores;
    });
    this.temp.length = 0;
    this.addMoreItems();
    this.disabled = false;
    if (this.sourceiconhide === true) {
      this.scoreicon = "arrow-round-Down";
    }
    if (this.comiconhide === true) {
      this.comiconhide = false;
      this.scoreicon = "arrow-round-Down";
      this.sourceiconhide = true;
    }
  }

  initializeData() {
    this.searchdata = this.somedata;
  }

  search(event) {
    this.initializeData();
    if (event.target.value.length != 0) {
      const query = event.target.value.toLowerCase();
      if (query && query.trim() != '') {
        if (this.hide === true) {
          this.hide = false;
        }
        this.isItemAvailable = true;
        this.searchdata = this.searchdata.filter((item) => {
          return (item.companyName.toLowerCase().indexOf(query.toLowerCase()) > -1) || (item.ticker.toLowerCase().indexOf(query.toLowerCase()) > -1);
        })
      }
    } else {
      this.hide = true;

    }
  }

  loadData(event) {
    setTimeout(() => {
      this.addMoreItems();
      event.target.complete();
      if (this.temp.length === this.firstdata.length) {
        this.disabled = true;
      }
    }, 1000);
  }

  addMoreItems() {
    let len = this.temp.length;
    let remainig = this.firstdata.length - len;
    if (remainig > 50) {
      this.n = len + 50;
    } else {
      this.n = len + remainig;
    }
    for (let i = len; i < this.n; i++) {
      this.temp.push(this.firstdata[i]);
    }
  }

  onClickCom() {
    this.sourceiconhide = false;
    this.scoreicon = "arrow-round-up";
    if (this.comiconhide === false) {
      this.comiconhide = true;
    }
    if (this.comicon === "arrow-round-up") {
      this.comicon = "arrow-round-Down";
      this.comSort();
      console.log(this.comflag);
    } else if (this.comicon === "arrow-round-Down") {
      this.comicon = "arrow-round-up";
      this.comSort();
      console.log(this.comflag);
    }
  }

  onClickScore() {
    this.comiconhide = false;
    this.comicon = "arrow-round-up";
    if (this.sourceiconhide === false) {
      this.sourceiconhide = true;
    }
    if (this.scoreicon === "arrow-round-up") {
      this.scoreicon = "arrow-round-Down";
      this.scoreSort();
      console.log(this.scoreflag);
    } else if (this.scoreicon === "arrow-round-Down") {
      this.scoreicon = "arrow-round-up";
      this.scoreSort();
      console.log(this.scoreflag);
    }
  }

  scoreSort() {
    if (this.scoreicon === "arrow-round-Down") {
      this.firstdata.sort((a, b) => {
        return a.scores - b.scores;
      });
      this.temp.length = 0;
      this.addMoreItems();
    } else if (this.scoreicon === "arrow-round-up") {
      this.firstdata.sort((a, b) => {
        return a.scores - b.scores;
      });
      this.firstdata.reverse();
      this.temp.length = 0;
      this.addMoreItems();
    }
  }

  comSort() {
    if (this.comicon === "arrow-round-Down") {
      this.firstdata.sort(function (a, b) {
        return a.companyName.localeCompare(b.companyName);
      });
      this.temp.length = 0;
      this.addMoreItems();
    } else if (this.comicon === "arrow-round-up") {
      this.firstdata.sort(function (a, b) {
        return a.companyName.localeCompare(b.companyName);
      });
      this.firstdata.reverse();
      this.temp.length = 0;
      this.addMoreItems();
    }
  }
}