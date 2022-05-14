import { Component, OnInit } from '@angular/core';
import {Tags} from "../shared/tag";
import {DrinkService} from "../services/drink/drink.service";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  tags: Tags[] = [];
  constructor(private ds:DrinkService) { }

  ngOnInit(): void {
    this.tags = this.ds.getAllTag()
  }

}
