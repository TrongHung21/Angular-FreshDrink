import {Drinks} from "./drink";

export class CartDrink {
  constructor(drink:Drinks) {
    this.drink = drink;
  }

  drink:Drinks;
  quantity:number = 1;
  get price():number {
    return this.drink.price*this.quantity;
  }
}
