import { Component } from '@angular/core';
import { AuthService } from '../../services/authservice/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-history-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './order-history-page.component.html',
  styleUrl: './order-history-page.component.scss'
})
export class OrderHistoryPageComponent {
  userEmail: string | null = null;
  orderHistory: any[] = [];

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.userEmail = this.authService.email;
    this.getOrderHistory();
  }

  async getOrderHistory(): Promise<void> {
    try {
      const response = await lastValueFrom(this.http.get<any[]>('https://672b61ac976a834dd026d7f5.mockapi.io/mukundkeshan_swiggyClone/orders'));
      
      this.orderHistory = response.filter(order => order.email === this.userEmail);
    } 
    catch (error) {
      console.error('Error fetching order history:', error);
      alert('There was an issue fetching your order history. Please try again.');
    }
  }

  getTotalOrderValue(items: any[]): number {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
