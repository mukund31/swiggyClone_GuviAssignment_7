import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishDataService } from '../../services/dishes/dish-data.service';
import { Dish } from '../../services/dishes/dish.model';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/authservice/auth.service';

@Component({
  selector: 'app-dish-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish-details.component.html',
  styleUrl: './dish-details.component.scss'
})
export class DishDetailsComponent implements OnInit {
  dish: Dish | undefined;

  constructor(
    private route: ActivatedRoute,
    private dishDataService: DishDataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const dishId = Number(paramMap.get('id'));
      this.dish = this.dishDataService.getDishes().find(d => d.id === dishId);
    });
  }

  addToCart(restaurant: { name: string; rating: string; restImageURL: string; price: number }) {
    if (!this.authService.isLoggedIn) {
      alert("Please Login to add item to cart!");
    } else {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const exists = cart.some((item: { name: string }) => item.name === restaurant.name);
      
      if (!exists) {
        cart.push(restaurant);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`${restaurant.name} added to cart.`);
      } else {
        console.log(`${restaurant.name} is already in the cart.`);
      }
    }
  }
  
  addToFavourites(restaurant: { name: string; restImageURL: string; price: number }) {
    if (!this.authService.isLoggedIn) {
      alert("Please Login to add item to favourites!");
    } else {
      let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
      const exists = favourites.some((item: { name: string }) => item.name === restaurant.name);
      
      if (!exists) {
        favourites.push(restaurant);
        localStorage.setItem('favourites', JSON.stringify(favourites));
        console.log(`${restaurant.name} added to favourites.`);
      } else {
        console.log(`${restaurant.name} is already in the favourites.`);
      }
    }
  }
}
