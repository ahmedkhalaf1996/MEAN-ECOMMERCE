import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guerd';
import { AdminGuerd } from './admin/admin-guerd';

import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { AuthComponent } from './auth/auth.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './paymentPages/checkout/checkout.component';
import { CartComponent } from './paymentPages/cart/cart.component';
import { NotfoundComponent } from './Error/notfound/notfound.component';
import { BlogComponent } from './blog/blog/blog.component';
import { BlogSingleComponent } from './blog/blog-single/blog-single.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { BloglistComponent } from './admin/bloglist/bloglist.component';
import { MessagesComponent } from './admin/messages/messages.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductsComponent } from './admin/products/products.component';
import { UsersComponent } from './admin/users/users.component';



const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'productlist', component: ProductListComponent  },
   { path: 'ProductDetails', component: ProductDetailsComponent },
   { path: 'login', component: AuthComponent },
   { path: 'contact', component: ContactUsComponent },
   { path: 'checkout', component: CheckoutComponent },
   { path: 'cart' , component: CartComponent },
   { path: 'blog' , component: BlogComponent , canActivate: [AuthGuard]},
   { path: 'blog-single' , component: BlogSingleComponent  },
   // admin part

   { path: 'admin', component: AdminPageComponent },
   { path: 'bloglist',  component: BloglistComponent, outlet: 'any' },
   { path: 'messages', component: MessagesComponent },
   { path: 'orders', component: OrdersComponent },
   { path: 'products', component: ProductsComponent },
   { path: 'users', component: UsersComponent },

  // //  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuerd]  },
  // //  { path: 'adminbloglist', component: , canActivate: [AdminGuerd]  },

  //  // end of admin part
  // // { path: '', component: PostListComponent },
  // // { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },

  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuerd]
  // providers: [AuthGuard]
})

export class AppRoutingModule {}
