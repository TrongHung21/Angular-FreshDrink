import { Component, OnInit } from '@angular/core';

import {Cart} from "../shared/Cart";
import {CartService} from "../services/cart.service";
import {CartDrink} from "../shared/CartDrink";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartDrink: CartDrink) {
    this.cartService.removeFromCart(cartDrink.drink.id);
    this.setCart();
  }

  changeQuantity (cartDrink: CartDrink, quantityInString:string) {
    const quantity = parseInt(quantityInString);
    console.log(cartDrink.drink.id);
    this.cartService.changeQuantity(quantity, cartDrink.drink.id);
    this.setCart();
  }


}
