import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="text-align:center">
      <h1>Welcome to Angular Firebase Auth!</h1>

      <div *ngIf="!user">
        <h3>Login</h3>
        <input type="email" [(ngModel)]="email" placeholder="Email" />
        <input type="password" [(ngModel)]="password" placeholder="Password" />
        <button (click)="login()">Login</button>
        <button (click)="register()">Register</button>
        <hr />
        <button (click)="googleSignIn()">Sign in with Google</button>
      </div>

      <div *ngIf="user">
        <h3>Welcome, {{ user?.displayName || user?.email }}</h3>
        <img *ngIf="user?.photoURL" [src]="user.photoURL" alt="User Photo" style="border-radius:50%; width:50px; height:50px;" />
        <button (click)="logout()">Logout</button>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  email = '';
  password = '';
  user: any = null;

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  async login() {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      this.user = userCredential.user;
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  async register() {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      this.user = userCredential.user;
    } catch (error) {
      console.error('Registration error:', error);
    }
  }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      this.user = result.user;
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.user = null;
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
}
