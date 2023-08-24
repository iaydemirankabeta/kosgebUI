import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../_fake/fake-data';
import { Category } from './category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.categories = this.dataService.getCategories();
  }
}
