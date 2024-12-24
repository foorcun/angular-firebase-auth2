import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBwGwo7LQR8VWudeI-5naBITPpgUCRnQQw",
  authDomain: "appangularfire7.firebaseapp.com",
  databaseURL:
    "https://appangularfire7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "appangularfire7",
  storageBucket: "appangularfire7.firebasestorage.app",
  messagingSenderId: "901015115914",
  appId: "1:901015115914:web:b3b9b81bc95559a8c27573",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
