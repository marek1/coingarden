import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import { SliderComponent } from './components/slider/slider.component';
import { ResultsComponent } from './components/results/results.component';
import { StrategieComponent } from './components/strategie/strategie.component';
import { ProviderProductComponent } from './components/provider-product/provider-product.component';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProviderComponent } from './components/provider/provider.component';
import { OffersComponent } from './components/offers/offers.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { NgxY2PlayerModule } from 'ngx-y2-player';
import { AllOffersComponent } from './components/all-offers/all-offers.component';
import { NgChartsModule } from 'ng2-charts';

registerLocaleData(localeDe);

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    StartComponent,
    SliderComponent,
    ResultsComponent,
    StrategieComponent,
    ProviderProductComponent,
    ImpressumComponent,
    DatenschutzComponent,
    BlogComponent,
    ProviderComponent,
    OffersComponent,
    YoutubeComponent,
    AllOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgxSliderModule,
    FormsModule,
    NgxY2PlayerModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
