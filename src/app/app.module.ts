import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';






import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './header/slider/slider.component';
import { CategoryComponent } from './body/category/category.component';
import { FeaturesItemsComponent } from './body/features-items/features-items.component';
import { RecommendedItemsComponent } from './body/recommended-items/recommended-items.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing-module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { AuthComponent } from './auth/auth.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './paymentPages/checkout/checkout.component';
import { CartComponent } from './paymentPages/cart/cart.component';
import { BlogSingleComponent } from './blog/blog-single/blog-single.component';
import { BlogComponent } from './blog/blog/blog.component';
import { NotfoundComponent } from './Error/notfound/notfound.component';
import { AuthInterceptor } from './auth/auth-interseptor';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { UsersComponent } from './admin/users/users.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductsComponent } from './admin/products/products.component';
import { MessagesComponent } from './admin/messages/messages.component';
import { BloglistComponent } from './admin/bloglist/bloglist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    CategoryComponent,
    FeaturesItemsComponent,
    RecommendedItemsComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    AuthComponent,
    ContactUsComponent,
    CheckoutComponent,
    CartComponent,
    BlogSingleComponent,
    BlogComponent,
    NotfoundComponent,
    AdminPageComponent,
    UsersComponent,
    OrdersComponent,
    ProductsComponent,
    MessagesComponent,
    BloglistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    FormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
