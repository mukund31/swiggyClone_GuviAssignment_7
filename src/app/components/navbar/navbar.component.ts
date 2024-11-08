import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/authservice/auth.service';
import { Dish } from '../../services/dishes/dish.model';
import { DishDataService } from '../../services/dishes/dish-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sideMenuOpen = false;
  isLoginModalOpen = false;
  hasAccount = true;
  cartCount: number = 0;
  // isLoggedIn = false;

  isLoggedIn: boolean = false;

  searchQuery: string = '';

  constructor(private http: HttpClient, 
    private authService: AuthService, 
    private router: Router,
    private dishDataService: DishDataService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.updateCartCount();
  }

  updateCartCount(): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartCount = cart.length;
  }

  toggleMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }

  showLoginModal() {
    this.isLoginModalOpen = true;
  }

  hideLoginModal() {
    this.isLoginModalOpen = false;
  }

  openLogin() {
    this.hasAccount = true;
  }

  hideLogin() {
    this.hasAccount = false;
  }

  logUserOut() {
    this.isLoggedIn = false; 
    this.authService.setLoggedIn(false);
    localStorage.clear();
  }

  async signUpSendMockAPI(form: any): Promise<void> {
    if (form.valid) {
      const formData: SignUpData = {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password
      };

      if (form.value.confirmPassword !== formData.password) {
        alert('Password and Confirm Password do not match');
        return; 
      }

      try {
        const res = await lastValueFrom(this.http.post("https://672b61ac976a834dd026d7f5.mockapi.io/mukundkeshan_swiggyClone/users", formData));
        this.openLogin();
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('Form is invalid');
    }
  }

  async logInGetMockAPI(form: any): Promise<void> {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;

      try {
        const users = await lastValueFrom(this.http.get<any[]>("https://672b61ac976a834dd026d7f5.mockapi.io/mukundkeshan_swiggyClone/users"));
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
          alert('Login successful');
          this.hideLoginModal();
          this.isLoggedIn = true;
          this.authService.setLoggedIn(true, email);
        } else {
          alert('Invalid email or password');
        }
      } catch (e) {
        console.log("Error: ", e);
      }
    } else {
      console.log('Form is invalid');
    }
  }


  onSearch() {
    const matchingDish: Dish | undefined = this.dishDataService.getDishes().find(dish => 
      dish.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    if (matchingDish) {
      this.router.navigate(['/dish', matchingDish.id]);
    } else {
      alert('Dish not found. Please try a different search query.');
    }
    // if (this.searchQuery.trim()) {
    //   this.router.navigate(['/search-results'], { queryParams: { query: this.searchQuery } });
    // }
  }
} 

interface SignUpData {
  name: string;
  email: string;
  password: string;
}
