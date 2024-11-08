import { Component } from '@angular/core';
import { RestaurantDataService } from '../../services/restaurants/restaurant-data.service';
import { Restaurant } from '../../services/restaurants/restaurant.model';
import { RestaurantComponent } from '../restaurant/restaurant.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-section',
  standalone: true,
  imports: [RestaurantComponent, CommonModule],
  templateUrl: './restaurant-section.component.html',
  styleUrl: './restaurant-section.component.scss'
})
export class RestaurantSectionComponent {
  restaurants: Restaurant[]=[];

  constructor(private restaurantDataService: RestaurantDataService) {}

  ngOnInit(): void {
    this.restaurants = this.restaurantDataService.getRestaurants();
  }
}
