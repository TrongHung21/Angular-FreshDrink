import {Injectable} from '@angular/core';
import {Drinks} from "../../shared/drink";
import {Tags} from "../../shared/tag";

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor() {
  }

  getId (id:number){
    return this.getAll().find(drink => drink.id == id)
  }
  getAllDrinkByTag(tag: string): Drinks[] {
    return tag == 'All' ?
      this.getAll() : this.getAll().filter(drink => drink.tags?.includes(tag))
  }

  getAllTag(): Tags[] {
    return [
      {name: 'All', count: 8},
      {name: 'Fruit', count: 5},
      {name: 'Tea', count: 2},
      {name: 'Juice', count: 3},
      {name: 'Cocktail', count: 4},
      {name: 'Soda', count: 2},


    ];
  }

  getAll(): Drinks[] {
    return [
      {
        id: 1,
        name: 'Fresh KiWi',
        price: 12,
        imageUrl: 'assets/img/drink1.jpg',
        tags: ['Fruit', 'Juice']
      },
      {
        id: 2,
        name: 'Fresh Soda',
        price: 8,
        imageUrl: 'assets/img/drink2.jpg',
        tags: ['Cocktail', 'Soda']
      },
      {
        id: 3,
        name: 'Fresh Lemon',
        price: 12,
        imageUrl: 'assets/img/drink3.jpg',
        tags: ['Fruit', 'Juice']
      },
      {
        id: 4,
        name: 'Fresh Tea',
        price: 32,
        imageUrl: 'assets/img/drink4.jpg',
        tags: ['Tea']
      },
      {
        id: 5,
        name: 'GreenCocktail',
        price: 20,
        imageUrl: 'assets/img/drink5.jpg',
        tags: ['Fruit', 'Cocktail', 'Tea']
      },
      {
        id: 6,
        name: 'WhiteSoda',
        price: 8,
        imageUrl: 'assets/img/drink6.jpg',
        tags: ['Soda', 'CockTail']
      },
      {
        id: 7,
        name: 'GreenJuice',
        price: 16,
        imageUrl: 'assets/img/drink7.jpg',
        tags: ['Fruit', 'Juice']
      },
      {
        id: 8,
        name: 'LemonCocktail',
        price: 12,
        imageUrl: 'assets/img/drink8.jpg',
        tags: ['Fruit', 'Cocktail']
      }
    ];
  }

}
