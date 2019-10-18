import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  chartMain:any;

  constructor(public router:Router) {
    // this.width = 900 - this.margin.left - this.margin.right ;
    // this.height = 500 - this.margin.top - this.margin.bottom;
    // this.radius = Math.min(this.width, this.height) / 2;
   }

  ngOnInit() {
    var gchart = d3.select("#gchart"); 
    this.chartMain = this.createMainChart(gchart);
  }

  performance_click(){
    this.router.navigateByUrl('/performance/');
  }

  currentscores_click(){
    this.router.navigateByUrl('/scores');
  }

  createMainChart(obj){
    let sradius = 100;
    var grp1= obj.append("g").attr("id","ctrlchart");
    grp1.append("circle")
        .attr("id","maincircle")
        .attr("class","start-ring")
        .attr("fill","#fff")
        .attr("r","0")
        .style("stroke-width","100px")
        .transition()
        .delay(300)
        .duration(1000)
        .attr("r",sradius)
        .style("stroke-width","5px")
        .on("end",function(){
          grp1.append("circle")
              .attr("class","start-ring")
              .attr("r",sradius)
        })
  }

  onclick(){
    this.router.navigateByUrl('/test');
  }

}