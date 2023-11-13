import {ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result-inner',
  templateUrl: './search-result-inner.component.html',
})
export class SearchResultInnerComponent implements OnInit {
  @HostBinding('class') class = 'p-7 w-500px w-md-500px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  @HostBinding('attr.data-kt-search-element') dataKtSearch = 'content';

  resultModels: Array<ResultModel> = resultModels;
  recentlySearchedModels: Array<ResultModel> = recentlySearchedModels;

  keyword: string = '';
  searching: boolean = false;
  filteredResults: ResultModel[];

  constructor(private cdr: ChangeDetectorRef,private router:Router) {
  }

  ngOnInit(): void {
  }

  onEnterPressed(): void {
    // Enter tuşuna basıldığında yapılacak işlemleri burada tanımlayın.
    this.router.navigate(['arama']);
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
    'image': './assets/media/logos/bil2.jpeg',
    'title': 'BMC',
    'description': 'Büyük İşletme'
  },
  {
    'image': './assets/media/logos/bil1.jpeg',
    'title': 'Hyundai',
    'description': 'Büyük İşletme'
  },
  {
    'image': './assets/media/logos/bmw.png',
    'title': 'BMW',
    'description': 'Büyük İşletme'
  },
  {
    'image': './assets/media/logos/bil3.jpeg',
    'title': 'SAIC',
    'description': 'Büyük İşletme'
  },
  {
    'image': './assets/media/logos/kobi1.jpeg',
    'title': 'Huzur Şanzıman',
    'description': 'Kobi'
  },
  {
    'image': './assets/media/logos/kobi2.jpeg',
    'title': 'Nur Şanzıman',
    'description': 'Kobi'
  },
  {
    'image': './assets/media/logos/kobi3.jpeg',
    'title': 'Bert',
    'description': 'Kobi'
  },
  {
    'image': './assets/media/logos/kobi4.jpeg',
    'title': 'Merkez Şanzıman',
    'description': 'Kobi'
  },
  {
    'image': './assets/media/logos/kobi5.jpeg',
    'title': 'ZF',
    'description': 'Kobi'
  },
  {
    'image': './assets/media/logos/ibm.png',
    'title': 'IBM',
    'description': 'Büyük İşletme'
  },{
    'image': './assets/media/logos/ankabeta-logo.png',
    'title': 'AnkaBeta',
    'description': 'Büyük İşletme'
  }, {
    'image': './assets/media/logos/kosgeb.png',
    'title': 'KOSGEB',
    'description': 'Kurum'
  },
];

const recentlySearchedModels: Array<ResultModel> = [
  {
    'icon': './assets/media/icons/duotune/electronics/elc004.svg',
    'title': 'Özet',
    'description': '#45789'
  }, {
    'icon': './assets/media/icons/duotune/graphs/gra001.svg',
    'title': 'Raporlar',
    'description': '#84050'
  }, {
    'icon': './assets/media/icons/duotune/graphs/gra006.svg',
    'title': 'Grafikler',
    'description': '#84250'
  },
  {
    'icon': './assets/media/icons/duotune/electronics/elc003.svg',
    'title': 'Büyük İşletmeler',
    'description': '#45789'
  }, {
    'icon': './assets/media/icons/duotune/graphs/gra002.svg',
    'title': 'Kobiler',
    'description': '#84050'
  },
  {
    'icon': './assets/media/icons/duotune/electronics/elc007.svg',
    'title': 'Çağrılar',
    'description': '#45789'
  },
  
];
