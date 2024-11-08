import { Component } from '@angular/core';
import { DishDataService } from '../../services/dishes/dish-data.service';
import { Dish } from '../../services/dishes/dish.model';
import { DishComponent } from '../dish/dish.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dishes-section',
  standalone: true,
  imports: [DishComponent, CommonModule],
  templateUrl: './dishes-section.component.html',
  styleUrl: './dishes-section.component.scss'
})

export class DishesSectionComponent {
  dishes: Dish[]=[];
  
  constructor(private dishDataService: DishDataService) {}

  ngOnInit(): void {
    this.dishes = this.dishDataService.getDishes();
  }
}
