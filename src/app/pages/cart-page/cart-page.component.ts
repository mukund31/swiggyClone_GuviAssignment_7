import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/authservice/auth.service';
import { lastValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit {
  cartItems: { name: string; restImageURL: string; price: number; rating: string; location: string; quantity: number;}[] = [];
  userEmail: string | null = null;
  userAddress: string = '';

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    const cart = localStorage.getItem('cart');
    this.cartItems = cart ? JSON.parse(cart).map((item: any) => ({
      ...item,
      quantity: item.quantity || 1
    })) : [];

    this.userEmail = this.authService.email;
    console.log('Logged-in user email:', this.userEmail);
  }
  
  async placeOrder(): Promise<void> {
    if (!this.userAddress.trim()) {
      alert('Please enter a delivery address.');
      return;
    }

    const orderData = {
      email: this.userEmail,
      address: this.userAddress,
      items: this.cartItems
    };

    try {
      const response = await lastValueFrom(this.http.post('https://672b61ac976a834dd026d7f5.mockapi.io/mukundkeshan_swiggyClone/orders', orderData));
      console.log('Order successfully sent:', response);
      this.clearCart();
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error sending order:', error);
      alert('There was an issue placing your order. Please try again.');
    }
  }

  private clearCart(): void {
    localStorage.removeItem('cart');
    this.cartItems = [];
  }

  updateQuantity(item: any, change: number): void {
    item.quantity += change;
    if (item.quantity < 1) {
      item.quantity = 1;
    }
    this.saveCart();
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
  
  deleteItem(item: any): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.name !== item.name);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getTotalOrderValue(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}