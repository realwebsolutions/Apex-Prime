import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
    withViewTransitions(),
  ), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimations(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"apexprime-243f7","appId":"1:429676747094:web:c5a63145e1068811875ef7","databaseURL":"https://apexprime-243f7-default-rtdb.asia-southeast1.firebasedatabase.app","storageBucket":"apexprime-243f7.appspot.com","apiKey":"AIzaSyChBFEEJYjRhIDe_DznwY1_f2piJSAA1gs","authDomain":"apexprime-243f7.firebaseapp.com","messagingSenderId":"429676747094"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))
  ]

};
