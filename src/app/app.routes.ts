import { Routes } from '@angular/router';
import { DishDetailsComponent } from './components/dish-details/dish-details.component';
import { HomeComponent } from './pages/home/home.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { OrderHistoryPageComponent } from './pages/order-history-page/order-history-page.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dish/:id', component: DishDetailsComponent },
  { path: 'restaurant/:id', component: RestaurantDetailsComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'favourities', component: FavouritesPageComponent },
  { path: 'orderHistory', component: OrderHistoryPageComponent },
];


export const AppRoutingModule = RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });
