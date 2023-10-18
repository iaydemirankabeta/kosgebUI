import { Company } from 'src/app/models/Company.model';
import { DataService } from 'src/app/_fake/fake-data';
import { Component, Input, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { getCSSVariableValue } from 'src/app/_metronic/kt/_utils';
import { AuthService,UserModel,UserType } from 'src/app/modules/auth';
import {environment} from '../../../environments/environment'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  envInfo = environment;
  selectedCompany:Company | null = null
  user$: Observable<UserType>;
  chartOptions: any = {};

  @Input() cssClass: string = '';
  @Input() chartSize: number = 70;
  @Input() chartLine: number = 11;
  @Input() chartRotate?: number = 145;
  constructor(private auth:AuthService,private dataService:DataService) {
    var companyId = auth.currentUserValue?.selectedCompany?.company.id || 1
    this.selectedCompany = dataService.getCompany(companyId || 1);
  }
  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    setTimeout(() => {
      initChart(this.chartSize, this.chartLine, this.chartRotate);
    }, 10);
    
  }

}

const initChart = function (
  chartSize: number = 70,
  chartLine: number = 11,
  chartRotate: number = 145
) {
  const el = document.getElementById('kt_card_widget_17_chart_admin');

  if (!el) {
    return;
  }

  var options = {
    size: chartSize,
    lineWidth: chartLine,
    rotate: chartRotate,
    //percent:  el.getAttribute('data-kt-percent') ,
  };

  const canvas = document.createElement('canvas');
  const span = document.createElement('span');

  // @ts-ignore
  if (typeof G_vmlCanvasManager !== 'undefined') {
    // @ts-ignore
    G_vmlCanvasManager.initElement(canvas);
  }

  const ctx = canvas.getContext('2d');
  canvas.width = canvas.height = options.size;

  el.appendChild(span);
  el.appendChild(canvas);

  // @ts-ignore
  ctx.translate(options.size / 2, options.size / 2); // change center
  // @ts-ignore
  ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

  //imd = ctx.getImageData(0, 0, 240, 240);
  const radius = (options.size - options.lineWidth) / 2;

  const drawCircle = function (
    color: string,
    lineWidth: number,
    percent: number
  ) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    if (!ctx) {
      return;
    }

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round'; // butt, round or square
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  // Init
  drawCircle(getCSSVariableValue('--bs-primary'), options.lineWidth, 100 / 70);
  drawCircle(getCSSVariableValue('--bs-success'), options.lineWidth, 100 / 150);
};

