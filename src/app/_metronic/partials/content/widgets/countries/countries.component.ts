import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  worldData: any; // TopoJSON verisini saklamak için bir değişken
  width = 800;
  height = 400;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const svg = d3
      .select(this.mapContainer.nativeElement)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    this.http.get('assets/world.json').subscribe((data: any) => {
      this.worldData = data;
      this.drawMap(svg);
    });
  }

  drawMap(svg: any) {
    const projection = d3.geoMercator()
      .scale(100)
      .translate([this.width / 2, this.height / 2]);

    const path = d3.geoPath().projection(projection);
    console.log(this.worldData);
    
    console.log(topojson.feature(this.worldData, this.worldData));
    svg
      .selectAll('path')
      .data(topojson.feature(this.worldData, this.worldData.objects))
      .enter()
      .append('path')
      .attr('d', (d: any) => path(d) as string)
      .classed('country', true);
  }
  
}
