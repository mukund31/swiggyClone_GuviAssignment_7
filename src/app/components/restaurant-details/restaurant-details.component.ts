import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Restaurant } from '../../services/restaurants/restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantDataService } from '../../services/restaurants/restaurant-data.service';
import { AuthService } from '../../services/authservice/auth.service';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.scss'
})
export class RestaurantDetailsComponent {
  restaurant: Restaurant | undefined;

  constructor(
    private route: ActivatedRoute,
    private restaurantDataService: RestaurantDataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const dishId = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurant = this.restaurantDataService.getRestaurants().find(d => d.id === dishId);
  }

  addToCart(dish: { name: string; restImageURL: string; price: number }) {
    if(!this.authService.isLoggedIn) {
      alert("Please Login to add item to cart !")
    }
    else {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const exists = cart.some((item: { name: string }) => item.name === dish.name);
      
      if (!exists) {
        cart.push(dish);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`${dish.name} added to cart.`);
      } else {
        console.log(`${dish.name} is already in the cart.`);
      }
    }
  }
  
  addToFavourites(dish: { name: string; restImageURL: string; price: number }) {
    if(!this.authService.isLoggedIn) {
      alert("Please Login to add item to favourites !")
    }
    else {
      let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
      
      const exists = favourites.some((item: { name: string }) => item.name === dish.name);
      
      if (!exists) {
        favourites.push(dish);
        localStorage.setItem('favourites', JSON.stringify(favourites));
        console.log(`${dish.name} added to favourites.`);
      } else {
        console.log(`${dish.name} is already in the cart.`);
      }
    }
  }
}
 