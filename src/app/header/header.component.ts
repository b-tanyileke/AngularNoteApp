
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name = 'Blake';
  firstname = 'Nkolaka';
  lastname = 'Tanyileke';
  imgURL = "https://www.sololearn.com/images/tree.jpg";
}
