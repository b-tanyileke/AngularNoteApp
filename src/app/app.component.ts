import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({ //decorator
  selector: 'app-root', //selector that can be used as a reference tag in the index.html 
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { // this is the name of the component
  title = 'NoteApp';
  isRed = false;

  login(){
    alert("This is what an alert message looks like")
  }

  change(){
    this.isRed = !this.isRed;
  }
}
