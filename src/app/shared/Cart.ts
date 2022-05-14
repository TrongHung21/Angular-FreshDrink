import {CartDrink} from "./CartDrink";

export  class Cart {
  items:CartDrink[] = [];

  addToCart(CartDrink: CartDrink) {
    this.items.push(CartDrink);
  }

  get totalPrice():number {
    let totalPrice = 0;
    this.items.forEach(item =>{
      totalPrice += item.price;
    });
    return totalPrice;
  }
}
