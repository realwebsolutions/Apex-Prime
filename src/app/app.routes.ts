import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { VisionComponent } from './vision/vision.component';
import { ProgramsComponent } from './programs/programs.component';

export const routes: Routes = [
    { path:'', redirectTo: 'home', pathMatch:"full"},
   { path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  { path: 'vision', component: VisionComponent},
  { path: 'programs', component: ProgramsComponent},
   { path: '**', component: HomeComponent } // Wildcard route for any unmatched routes
  
  ];
