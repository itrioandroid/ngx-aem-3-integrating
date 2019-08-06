import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {WeatherComponent} from './weather/weather.component';
import {SharedModule} from './shared/shared.module';
import {WeatherDetailsComponent} from './weather-details/weather-details.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import {createCustomElement} from "@angular/elements";
import { ReadmoreComponent } from './readmore/readmore.component';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherDetailsComponent,
    WeatherIconComponent,
    ReadmoreComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  entryComponents: [
    WeatherComponent,
    ReadmoreComponent
  ],
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const weatherElement = createCustomElement(WeatherComponent, {injector: this.injector });
    customElements.define('weather-ng', <any>weatherElement);

    const readmoreElement = createCustomElement(ReadmoreComponent, {injector: this.injector });
    customElements.define('readmore-ng', <any>readmoreElement);
  }
}
