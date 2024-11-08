import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DishesSectionComponent } from './components/dishes-section/dishes-section.component';
import { RestaurantSectionComponent } from './components/restaurant-section/restaurant-section.component';

import { HomeComponent } from './pages/home/home.component';
import { DishComponent } from "./components/dish/dish.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from "./components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, DishesSectionComponent, RestaurantSectionComponent, RouterOutlet, HomeComponent, DishComponent, CartPageComponent, HttpClientModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'swiggyClone-GuviAssignment-7';
}
