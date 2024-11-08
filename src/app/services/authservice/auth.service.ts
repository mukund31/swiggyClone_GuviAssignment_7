import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  private userEmail: string | null = localStorage.getItem('userEmail');

  isLoggedIn$ = this.loggedIn.asObservable();

  constructor() { }

  setLoggedIn(status: boolean, email?: string): void {
    this.loggedIn.next(status);
    localStorage.setItem('isLoggedIn', status.toString());
    
    if (status && email) {
      this.userEmail = email;
      localStorage.setItem('userEmail', email);
    } else {
      this.userEmail = null;
      localStorage.removeItem('userEmail');
    }
  }

  get isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  get email(): string | null {
    return this.userEmail;
  }
}
