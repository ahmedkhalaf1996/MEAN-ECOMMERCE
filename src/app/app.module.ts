import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './header/slider/slider.component';
import { CategoryComponent } from './body/category/category.component';
import { FeaturesItemsComponent } from './body/features-items/features-items.component';
import { RecommendedItemsComponent } from './body/recommended-items/recommended-items.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    CategoryComponent,
    FeaturesItemsComponent,
    RecommendedItemsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
