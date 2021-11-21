import { Component } from '@angular/core';
import { ChartServiceService } from './chart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PRIMENgChartPieBar';
  data:any;
  dataList=[];
  dataArray=[];
 
  constructor(private pieService:ChartServiceService) {
      }
      ngOnInit(): void {
        this.pieService.getPieData().subscribe(piedata=>
          {
            this.data = {
              labels: ['Java','Dot-Net','Python'],
              datasets: [
                  {
                      data: [piedata['data1'],piedata['data2'],piedata['data3']],
                      
                       backgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                          "#FFCE56"
                      ],
                      hoverBackgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                          "#FFCE56"
                      ]
                  }]    
              }; 
          });
      }
     
    
}
