import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }

  navigate()
  {
    this._Router.navigate(['home']);
  }

}
