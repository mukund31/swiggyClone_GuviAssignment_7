import { Component } from '@angular/core';
import { DishesSectionComponent } from '../../components/dishes-section/dishes-section.component';
import { RestaurantSectionComponent } from '../../components/restaurant-section/restaurant-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DishesSectionComponent, RestaurantSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
