import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../recipes/recipe.service';
import { Recipe } from '../recipe.module'; //ini keknya salah dah tadi error soalnya yang loadedRecipe
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(private activedRoute: ActivatedRoute, private recipesSvc: RecipeService,
    public alertController : AlertController,public toastController: ToastController, private router: Router) { }
  ngOnInit() {
    this.activedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('recipeId')){ return; }
        this.loadedRecipe = this.recipesSvc.getRecipe(paramMap.get('recipeId'));
      }
    );
  }
  
  deleteRecipe(){
    this.recipesSvc.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipe']);
    this.Toast()
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header:'Delete Recipe',
      message: 'Are you sure you want to delete this recipe?',
      buttons:[
        {
          text:'YES',
          handler:() => this.deleteRecipe()
        },
        {
          text:'Cancel',
          role:'cancel'
        }
      ]
    });
    await alert.present();
  }
  async Toast(){
    const toast = await this.toastController.create(
      {
        message: 'Recipe has been deleted',
        duration: 2000
      }
    );
    toast.present();
  }
}
