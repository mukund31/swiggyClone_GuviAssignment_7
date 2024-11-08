import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dish } from '../../services/dishes/dish.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss'
})
export class DishComponent {
  @Input() dish!: Dish;
}