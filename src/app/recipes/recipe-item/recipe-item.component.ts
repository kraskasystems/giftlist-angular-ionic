import {Component, Input, OnInit} from '@angular/core';
import {IRecipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: IRecipe;

  constructor() { }

  ngOnInit() {}

}
