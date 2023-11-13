import { Component, Input } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {
  @Input() firm1: any;
  @Input() firm2: any;

  public columnChartData: number[] = [44, 55, 41, 64, 22, 43];
  
  public columnChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: ['A', 'B', 'C', 'D', 'E', 'F'],
    },
  };

  public columnChartColors: string[] = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#00D9E9'];
}
