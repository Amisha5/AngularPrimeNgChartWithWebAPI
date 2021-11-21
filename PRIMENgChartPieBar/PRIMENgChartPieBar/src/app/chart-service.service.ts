import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  readonly APIURL="https://localhost:44369/api/";
  
  constructor(private http:HttpClient) { }

  getPieData():Observable<any[]>
  {
    return this.http.get<any>(this.APIURL+'PieChartData');
  }

  getBarData():Observable<any[]>
  {
    return this.http.get<any>(this.APIURL+'BarChartData');
  }
}
