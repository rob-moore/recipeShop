import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Name', 'this is a test description', 'https://www.thehappycatsite.com/wp-content/uploads/2017/06/cool2.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
