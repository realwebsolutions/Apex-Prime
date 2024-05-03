import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-basketball',
  standalone: true,
  imports: [MatExpansionModule,MatIconModule],
  templateUrl: './basketball.component.html',
  styleUrl: './basketball.component.css'
})
export class BasketballComponent {

}
