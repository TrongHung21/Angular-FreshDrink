import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {CartPageComponent} from "./cart-page/cart-page.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'search/:searchDrink', component: MenuComponent},
  { path: 'tag/:tag', component: MenuComponent},
  { path: 'cart-page', component: CartPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
