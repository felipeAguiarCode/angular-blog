import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  dark:boolean = false;
  
  public switchTheme(){
    this.dark = !this.dark

    if(this.dark){
      document.documentElement.style.setProperty("--background-color","#131313")
      document.documentElement.style.setProperty("--text-color","whitesmoke")
      document.documentElement.style.setProperty("--border-color","whitesmoke")
    }else{
      document.documentElement.style.setProperty("--background-color","whitesmoke")
      document.documentElement.style.setProperty("--text-color","#131313")
      document.documentElement.style.setProperty("--border-color","#2b2b2b")
    }
  }

}
