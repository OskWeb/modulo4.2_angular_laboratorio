import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor() {}

  private isAuthenticated = false;
  private username = 'master@lemoncode.net';
  private password = '12345678';

  ngOnInit(): void {
    localStorage.setItem('auth', JSON.stringify(this.isAuthenticated));
  }

  login(username: string, password: string): boolean {
    if (username.match(this.username) && password.match(this.password)) {
      this.isAuthenticated = true;
      localStorage.setItem('auth', JSON.stringify(this.isAuthenticated));
      return this.isAuthenticated;
    }
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.setItem('auth', JSON.stringify(this.isAuthenticated));
  }

  isLogged(): boolean {
    if (localStorage.length > 0) {
      return JSON.parse(localStorage.getItem('auth') ?? '');
    } else {
      return false;
    }
  }

  getUserName(): string {
    return this.username;
  }
}
