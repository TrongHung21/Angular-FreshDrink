import { Component, OnInit } from '@angular/core';
import {Drinks} from "../shared/drink";
import {DrinkService} from "../services/drink/drink.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  drinks:Drinks[] = [];
  drink!:Drinks;
  constructor(private ds:DrinkService, private route:ActivatedRoute, private cartService: CartService, private router:Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchDrink']) {
        this.drinks = this.ds.getAll().filter(drink => drink.name.toLowerCase().includes(params['searchDrink'].toLowerCase()));
      } else if (params['tag']) {
        this.drinks = this.ds.getAllDrinkByTag(params['tag']);
      }
      else {
        this.drinks = this.ds.getAll();
      }
    })
  }


  addToCart(drink:Drinks) {
    this.cartService.addToCart(drink);
    this.router.navigateByUrl('/cart-page');
  }
}
