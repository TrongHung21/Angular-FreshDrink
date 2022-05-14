import { Injectable } from '@angular/core';
import {Cart} from "../shared/Cart";
import {Drinks} from "../shared/drink";
import {CartDrink} from "../shared/CartDrink";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  addToCart(drink:Drinks): void {
    console.log(drink);
    let cartItem = this.cart.items.find(item => item.drink.id === drink.id)
    if (cartItem) {
      this.changeQuantity(drink.id, cartItem.quantity+1);
      return;
    }
    this.cart.items.push(new CartDrink(drink));
  }

  removeFromCart(drinkId:number):void {
    this.cart.items = this.cart.items.filter(item => item.drink.id!=drinkId)
  }

  changeQuantity(quantity:number, drinkId:number) {
    let cartItem = this.cart.items.find(item => item.drink.id === drinkId);
    if (!cartItem) {
      return;
    }
    cartItem.quantity = quantity;
  }

  getCart() :Cart {
    return this.cart;
  }

}
