import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  

  array = ["assets/images/3.jpg", "assets/images/2.jpg", "assets/images/4.jpg"];


  content1 = [
    {
      pContent : 'Adorn Your Home',
      hContent: 'Handmade Interiors',
    },
    {
      pContent : 'We Love Handmade',
      hContent: 'Interior Decoration',
    },
    {
      pContent : 'Make Uniquely Yours',
      hContent: 'Bespoke  Decoration',
    }
  ];


  


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  
  customCarousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      500: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 5
      }

    },
  }
  

}
