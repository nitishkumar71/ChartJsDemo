import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarChartPage } from '../pages/bar-chart/bar.chart'
import { PieChartPage } from '../pages/pie-chart/pie.chart';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = BarChartPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
     private _menuController:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  setNavPage(page: string) {
    switch (page) {
      case 'bar':
        this.rootPage = BarChartPage;
        break;
      case 'pie':
        this.rootPage = PieChartPage;
        break;
      default:
        this.rootPage = BarChartPage;
        break;
    }
      this._menuController.close();
  }
}

