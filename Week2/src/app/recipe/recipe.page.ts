import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  recipe: Recipe[];

//   recipes: Recipe[] = [{
//     id: 'r1',
//     title: 'Nasi Goreng',
//     imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2016/03/Nasi-Goreng_3-1.jpg',
//     ingredients:['Nasi','Kecap','Telur','Tambahan Lainnya']
//   },
//   {
//     id: 'r2',
//     title: 'Mie Goreng',
//     imageUrl: 'http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-sosis.jpg',
//     ingredients:['Mie','Kecap','Telur','Tambahan Lainnya']
//   },
//   {
//     id: 'r3',
//     title: 'Ketoprak',
//     imageUrl: 'https://b.zmtcdn.com/data/pictures/2/18683852/c9d9301ef452afe85f4a5519a522da2a_featured_v2.jpg',
//     ingredients:['Lontong','Kecap','Kerupuk','Kacang']
//   },
// ];
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipe = this.recipeService.getAllRecipes();
  }
  showDetail(recipeId: string) {
    console.log(this.recipeService.getRecipe(recipeId));
  }
}
