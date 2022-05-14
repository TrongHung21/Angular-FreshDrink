import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchDrink:string = '';
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchDrink']) {
        this.searchDrink = params['searchDrink'];
      }
    })
  }

  search(): void {
    if(this.searchDrink) {
      this.router.navigateByUrl('/search/' + this.searchDrink);
    }
  }

}
