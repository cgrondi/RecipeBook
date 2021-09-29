import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe("Test Recipe", "A Test", "https://live.staticflickr.com/65535/48588252551_16d7043332_h.jpg"),
    new Recipe("Test Recipe", "A Test", "https://live.staticflickr.com/65535/48588252551_16d7043332_h.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
