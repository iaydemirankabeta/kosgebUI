import {ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-result-inner',
  templateUrl: './search-result-inner.component.html',
})
export class SearchResultInnerComponent implements OnInit {
  @HostBinding('class') class = 'menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  @HostBinding('attr.data-kt-search-element') dataKtSearch = 'content';

  resultModels: Array<ResultModel> = resultModels;
  recentlySearchedModels: Array<ResultModel> = recentlySearchedModels;

  keyword: string = '';
  searching: boolean = false;
  filteredResults: ResultModel[];

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  search(keyword: string) {
    this.keyword = keyword;
    this.searching = true;
  
    // Burada keyword'e göre resultModels dizisini filtrele
    this.filteredResults = resultModels.filter(result => {
      return result.title.toLowerCase().includes(keyword.toLowerCase()) ||
             result.description.toLowerCase().includes(keyword.toLowerCase());
    }).slice(0, 10);

  
    setTimeout(() => {
      this.searching = false;
      this.cdr.detectChanges();
    }, 1000);
  }

  clearSearch() {
    this.keyword = '';
  }
}

interface ResultModel {
  icon?: string;
  image?: string;
  title: string;
  description: string;
}

const resultModels: Array<ResultModel> = [
  {
    'image': './assets/media/avatars/300-6.jpg',
    'title': 'Emrah',
    'description': 'Marketing Manager'
  },
  {
    'image': './assets/media/avatars/300-2.jpg',
    'title': 'Eyüp',
    'description': 'Software Engineer'
  },
  {
    'image': './assets/media/avatars/300-9.jpg',
    'title': 'Ender',
    'description': 'UI/UX Designer'
  },
  {
    'image': './assets/media/avatars/300-14.jpg',
    'title': 'Emrullah',
    'description': 'Art Director'
  },
  {
    'image': './assets/media/avatars/300-11.jpg',
    'title': 'Ender',
    'description': 'System Administrator'
  },
  {
    'image': './assets/media/avatars/300-9.jpg',
    'title': 'Ender',
    'description': 'UI/UX Designer'
  },
  {
    'image': './assets/media/avatars/300-14.jpg',
    'title': 'Emrullah',
    'description': 'Art Director'
  },
  {
    'image': './assets/media/avatars/300-11.jpg',
    'title': 'Ender',
    'description': 'System Administrator'
  },
  {
    'image': './assets/media/avatars/300-9.jpg',
    'title': 'Ender',
    'description': 'UI/UX Designer'
  },
  {
    'image': './assets/media/avatars/300-14.jpg',
    'title': 'Emrullah',
    'description': 'Art Director'
  },
  {
    'image': './assets/media/avatars/300-11.jpg',
    'title': 'Ender',
    'description': 'System Administrator'
  },{
    'image': './assets/media/icons/duotune/electronics/elc004.svg',
    'title': 'Apple',
    'description': '#45789'
  }, {
    'image': './assets/media/icons/duotune/graphs/gra001.svg',
    'title': 'Findeks',
    'description': '#84050'
  },
];

const recentlySearchedModels: Array<ResultModel> = [
  {
    'icon': './assets/media/icons/duotune/electronics/elc004.svg',
    'title': 'Kobi1',
    'description': '#45789'
  }, {
    'icon': './assets/media/icons/duotune/graphs/gra001.svg',
    'title': 'Kobi2',
    'description': '#84050'
  }, {
    'icon': './assets/media/icons/duotune/graphs/gra006.svg',
    'title': 'Kobi3',
    'description': '#84250'
  }, {
    'image': './assets/media/avatars/300-9.jpg',
    'title': 'Ender',
    'description': 'UI/UX Designer'
  }, 
  {
    'image': './assets/media/avatars/300-14.jpg',
    'title': 'Emrullah',
    'description': 'Art Director'
  },
  {
    'image': './assets/media/avatars/300-6.jpg',
    'title': 'Emrah',
    'description': 'Marketing Manager'
  },
  
];
