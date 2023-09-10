import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';
  darkModeStyles = {
    'background-color': 'black',
    'color': 'white'
  };

  lightModeStyles = {
    'background-color': 'white',
    'color': 'black '
  };

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleMode();
  }
}
