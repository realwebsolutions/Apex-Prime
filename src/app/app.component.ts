import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterOutlet,MatIconModule,CommonModule,MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'apexprime';
  scrolled = false;
  lastScrollY: number = 0;
  constructor(private router :Router){}
  
home(){
  this.router.navigate(['/home']);
}

@HostListener('window:scroll', ['$event'])
onWindowScroll() {
  const currentScrollY = window.pageYOffset;

  if (currentScrollY === 0) {
    
    this.scrolled = false;
  } 
  else if (currentScrollY > this.lastScrollY) {

    this.scrolled = true;
  } 
  else{

    this.scrolled = true;
  }

  this.lastScrollY = currentScrollY;
}


  scrol(){
    this.scrolled = false;

  }
}