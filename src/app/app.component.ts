import { Component , HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  constructor(){

   
  }
  ngOnInit(): void {
    AOS.init();
  }

  @HostListener('window:scroll', ['$event'])

onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    let btnElm = document.querySelector('.btn-top') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('fixed-top');
      btnElm.classList.add("btn-cont");
    } else {
      element.classList.remove('fixed-top');
      btnElm.classList.remove("btn-cont");
    }
  }

  scrollTo()
  {

    window.scrollTo(0,0)
  }
  
}
