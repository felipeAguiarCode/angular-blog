import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = false;
  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
