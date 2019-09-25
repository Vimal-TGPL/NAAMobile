import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StatsPieChart } from '../../data/data';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import { Router } from '@angular/router';
var LandingPage = /** @class */ (function () {
    function LandingPage(router) {
        this.router = router;
        this.title = 'D3 Pie Chart in Ionic 4';
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.radius = Math.min(this.width, this.height) / 2;
    }
    LandingPage.prototype.ngOnInit = function () {
        this.initSvg();
        this.drawPie();
    };
    LandingPage.prototype.initSvg = function () {
        this.color = d3Scale.scaleOrdinal()
            .range(['#FFA500', '#00FF00', '#FF0000', '#6b486b', '#FF00FF', '#d0743c', '#00FA9A']);
        this.arc = d3Shape.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(0);
        this.labelArc = d3Shape.arc()
            .outerRadius(this.radius - 40)
            .innerRadius(this.radius - 40);
        this.labelPer = d3Shape.arc()
            .outerRadius(this.radius - 80)
            .innerRadius(this.radius - 80);
        this.pie = d3Shape.pie()
            .sort(null)
            .value(function (d) { return d.electionP; });
        this.svg = d3.select('#pieChart')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .append('g')
            .attr('transform', 'translate(' + Math.min(this.width, this.height) / 2 + ',' + Math.min(this.width, this.height) / 2 + ')');
    };
    LandingPage.prototype.drawPie = function () {
        var _this = this;
        var g = this.svg.selectAll('.arc')
            .data(this.pie(StatsPieChart))
            .enter().append('g')
            .attr('class', 'arc');
        g.append('path').attr('d', this.arc)
            .style('fill', function (d) { return _this.color(d.data.party); });
        g.append('text').attr('transform', function (d) { return 'translate(' + _this.labelArc.centroid(d) + ')'; })
            .attr('dy', '.35em')
            .text(function (d) { return d.data.party; });
        g.append('text').attr('transform', function (d) { return 'translate(' + _this.labelPer.centroid(d) + ')'; })
            .attr('dy', '.35em')
            .text(function (d) { return d.data.electionP + '%'; });
    };
    LandingPage.prototype.performance_click = function () {
        this.router.navigateByUrl('/performance/global');
    };
    LandingPage = tslib_1.__decorate([
        Component({
            selector: 'app-landing',
            templateUrl: './landing.page.html',
            styleUrls: ['./landing.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], LandingPage);
    return LandingPage;
}());
export { LandingPage };
//# sourceMappingURL=landing.page.js.map