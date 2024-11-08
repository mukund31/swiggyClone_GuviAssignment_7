import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authservice/auth.service';

@Component({
  selector: 'app-favourites-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourites-page.component.html',
  styleUrl: './favourites-page.component.scss'
})
export class FavouritesPageComponent {
  favouriteItems: { name: string; rating: string; restImageURL: string; price: number; location: string;}[] = [];

  ngOnInit(): void {
    const favourites = localStorage.getItem('favourites');
    this.favouriteItems = favourites ? JSON.parse(favourites) : [];
  }

  constructor(
    private authService: AuthService
  ) {}

  addToCart(restaurant: { name: string; rating: string; restImageURL: string; price: number }) {
    if(!this.authService.isLoggedIn) {
      alert("Please Login to add item to cart !")
    }
    else {
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

  removeFromFavourities(item: any): void {
    this.favouriteItems=this.favouriteItems.filter(favouriteItem => favouriteItem.name !== item.name);
    localStorage.setItem('favourities', JSON.stringify(this.favouriteItems));
  }
}
