import { Injectable } from '@angular/core';
import { Recipe } from '../recipe/recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipe: Recipe[] =[
    {
      id: 'r1',
      title: 'Nasi Goreng',
      imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2016/03/Nasi-Goreng_3-1.jpg',
      ingredients:['Nasi','Kecap','Telur','Tambahan Lainnya']
    },
    {
      id: 'r2',
      title: 'Mie Goreng',
      imageUrl: 'http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-sosis.jpg',
      ingredients:['Mie','Kecap','Telur','Tambahan Lainnya']
    },
    {
      id: 'r3',
      title: 'Ketoprak',
      imageUrl: 'https://b.zmtcdn.com/data/pictures/2/18683852/c9d9301ef452afe85f4a5519a522da2a_featured_v2.jpg',
      ingredients:['Lontong','Kecap','Kerupuk','Kacang']
    },
    
  ];

  constructor() { }
  
  getAllRecipes(){
    return[...this.recipe];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipe.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
  deleteRecipe(recipeId: string){
    for (var i = 0; i < this.recipe.length; i++) {
      if (this.recipe[i].id == recipeId) this.recipe.splice(i, 1);
    }
  } 
}
