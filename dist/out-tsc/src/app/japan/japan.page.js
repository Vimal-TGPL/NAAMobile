import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
var JapanPage = /** @class */ (function () {
    function JapanPage(httpnative) {
        this.httpnative = httpnative;
        this.APIUrl = "https://api.newagealpha.com/api/Indexes/GetIndexDetails";
        this.performanceAPIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexPerformance';
        this.selectedproduct = null;
        this.indexdetails = [];
        this.performancedetails = [];
        this.desc = null;
        this.count = 0;
        this.usa = [];
        this.value = null;
        this.getnativeindexdetails();
    }
    JapanPage.prototype.getnativeindexdetails = function () {
        var _this = this;
        this.httpnative.get(this.APIUrl, {}, {}).then(function (data) {
            _this.somedata = JSON.parse(data.data);
            for (var _i = 0, _a = _this.somedata; _i < _a.length; _i++) {
                var data_1 = _a[_i];
                if (JSON.stringify(data_1.indexName).indexOf("Japan") !== -1) {
                    _this.usa[_this.count] = data_1.indexName;
                    _this.count = _this.count + 1;
                }
            }
        });
        this.httpnative.get(this.performanceAPIUrl, {}, {}).then(function (data) {
            _this.anotherdata = JSON.parse(data.data);
        });
    };
    JapanPage.prototype.onProductChange = function (prod) {
        this.indexdetails = this.somedata.filter(function (item) { return item.indexName === prod.detail.value; });
        this.desc = this.indexdetails.map(function (x) {
            return x.description;
        });
        this.performancedetails = this.anotherdata.filter(function (item) { return item.indexName === prod.detail.value; });
        this.value = this.performancedetails.map(function (x) {
            return x.value;
        });
        this.value = this.roundValue(this.value);
        this.ondate = this.performancedetails.map(function (x) {
            return x.date;
        });
        this.daily = this.performancedetails.map(function (x) {
            return x.dailyReturn;
        });
        this.daily = this.daily * 100;
        this.daily = this.roundValue(this.daily);
        this.ytd = this.performancedetails.map(function (x) {
            return x.ytdReturn;
        });
        this.ytd = this.ytd * 100;
        this.ytd = this.roundValue(this.ytd);
        this.year1 = this.performancedetails.map(function (x) {
            return x.y1Return;
        });
        this.year1 = this.year1 * 100;
        this.year1 = this.roundValue(this.year1);
        this.year3 = this.performancedetails.map(function (x) {
            return x.y3Return;
        });
        this.year3 = this.year3 * 100;
        this.year3 = this.roundValue(this.year3);
        this.year5 = this.performancedetails.map(function (x) {
            return x.y5Return;
        });
        this.year5 = this.year5 * 100;
        this.year5 = this.roundValue(this.year5);
        this.year10 = this.performancedetails.map(function (x) {
            return x.y10Return;
        });
        this.year10 = this.year10 * 100;
        this.year10 = this.roundValue(this.year10);
        this.cum = this.performancedetails.map(function (x) {
            return x.cumReturns;
        });
        this.cum = this.cum * 100;
        this.cum = this.roundValue(this.cum);
        this.ann = this.performancedetails.map(function (x) {
            return x.annReturns;
        });
        this.ann = this.ann * 100;
        this.ann = this.roundValue(this.ann);
        this.y2018 = this.performancedetails.map(function (x) {
            return x.year1;
        });
        this.y2018 = this.y2018 * 100;
        this.y2018 = this.roundValue(this.y2018);
        this.y2017 = this.performancedetails.map(function (x) {
            return x.year2;
        });
        this.y2017 = this.y2017 * 100;
        this.y2017 = this.roundValue(this.y2017);
        this.y2016 = this.performancedetails.map(function (x) {
            return x.year3;
        });
        this.y2016 = this.y2016 * 100;
        this.y2016 = this.roundValue(this.y2016);
        this.y2015 = this.performancedetails.map(function (x) {
            return x.year4;
        });
        this.y2015 = this.y2015 * 100;
        this.y2015 = this.roundValue(this.y2015);
        this.y2014 = this.performancedetails.map(function (x) {
            return x.year5;
        });
        this.y2014 = this.y2014 * 100;
        this.y2014 = this.roundValue(this.y2014);
        this.y2013 = this.performancedetails.map(function (x) {
            return x.year6;
        });
        this.y2013 = this.y2013 * 100;
        this.y2013 = this.roundValue(this.y2013);
        this.y2012 = this.performancedetails.map(function (x) {
            return x.year7;
        });
        this.y2012 = this.y2012 * 100;
        this.y2012 = this.roundValue(this.y2012);
        this.y2011 = this.performancedetails.map(function (x) {
            return x.year8;
        });
        this.y2011 = this.y2011 * 100;
        this.y2011 = this.roundValue(this.y2011);
        this.y2010 = this.performancedetails.map(function (x) {
            return x.year9;
        });
        this.y2010 = this.y2010 * 100;
        this.y2010 = this.roundValue(this.y2010);
        this.y2009 = this.performancedetails.map(function (x) {
            return x.year10;
        });
        this.y2009 = this.y2009 * 100;
        this.y2009 = this.roundValue(this.y2009);
    };
    JapanPage.prototype.roundValue = function (val) {
        return Math.round(val * 100) / 100;
    };
    JapanPage = tslib_1.__decorate([
        Component({
            selector: 'app-japan',
            templateUrl: './japan.page.html',
            styleUrls: ['./japan.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HTTP])
    ], JapanPage);
    return JapanPage;
}());
export { JapanPage };
//# sourceMappingURL=japan.page.js.map