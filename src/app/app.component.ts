import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {TranslationService} from './modules/i18n';
// language list
import {locale as enLang} from './modules/i18n/vocabs/en';
import {locale as chLang} from './modules/i18n/vocabs/ch';
import {locale as esLang} from './modules/i18n/vocabs/es';
import {locale as jpLang} from './modules/i18n/vocabs/jp';
import {locale as deLang} from './modules/i18n/vocabs/de';
import {locale as frLang} from './modules/i18n/vocabs/fr';
import {ThemeModeService} from './_metronic/partials/layout/theme-mode-switcher/theme-mode.service';
import { environment as envProd } from './../environments/environment.prod';
import { environment as envDev } from './../environments/environment.dev';
import { environment as envTest } from './../environments/environment.test';


@Component({
  // tslint:disable-next-line:component-selector
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private modeService: ThemeModeService
  ) {
    // register translations
    this.translationService.loadTranslations(
      enLang,
      chLang,
      esLang,
      jpLang,
      deLang,
      frLang
    );
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    // Tarayıcı geri düğmesine basıldığında burası çalışır
    location.reload();
  }

    checkEnvironment(env: any) {
    if (env === envDev) {
      console.log('Bu geliştirme ortamıdır.');
    } else if (env === envProd) {
      console.log('Bu canlı (production) ortamıdır.');
    } else if (env === envTest) {
      console.log('Bu test ortamıdır.');
    } else {
      console.log('Bilinmeyen bir ortam.');
    }
  }

  ngOnInit() {
    this.modeService.init();
    let currentEnvironment: any;

    if (envDev) {
      currentEnvironment = envDev;
    } else if (envProd) {
      currentEnvironment = envProd;
    } else if (envTest) {
      currentEnvironment = envTest;
    } else {
      console.error('Tanımlanamayan bir ortam!');
      return;
    }
  
    this.checkEnvironment(currentEnvironment);
    
  }
}
