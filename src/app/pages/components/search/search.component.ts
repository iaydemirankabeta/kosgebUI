import { Component } from '@angular/core';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private searchService: SearchService) { }

  onSearchInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const query = target.value;
    this.searchService.updateSearchQuery(query);
  }
}
