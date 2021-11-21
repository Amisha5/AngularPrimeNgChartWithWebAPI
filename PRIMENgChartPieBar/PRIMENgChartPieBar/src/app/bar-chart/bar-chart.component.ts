import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { ChartServiceService } from '../chart-service.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  
  constructor(private barhttp:ChartServiceService) { }
  data: any;
  dataList=[];
  barchart:any;
  getBarChart()
  {
    this.barhttp.getBarData().subscribe(bardata=>
      {
        this.barchart = bardata;  
        console.log(this.barchart);
        this.data = {
        //labels:[this.barchart[0]['severity'],this.barchart[1]['severity'],this.barchart[2]['severity'],this.barchart[3]['severity']],  
          labels:this.barchart.map(v=>
            {
              return v.severity
            }),       
          datasets: [
              {
                  label: 'My First dataset',
                  backgroundColor: ['#42A5F5','orange','green','red'],
                  borderColor: '#1E88E5',
                
                 data: this.barchart.map(v=>{ return v.severityCount}),
                  //data: [ ]
                }
          ]
      }
      })
  }

  ngOnInit(): void {
   this.getBarChart();
  }

}
