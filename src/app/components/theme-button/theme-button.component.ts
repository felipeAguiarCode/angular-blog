import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../../service/theme.service';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.css','theme-button.responsive.component.css']
})
export class ThemeButtonComponent implements OnInit {

  constructor(private readonly themeService: ThemeService) { }

  modo:string = 'Escuro';

  switchTheme(){
    this.themeService.switchTheme();
    if(this.modo === 'Claro') this.modo = 'Escuro';
    else this.modo = 'Claro';
  }

  ngOnInit(): void {

  }

}
