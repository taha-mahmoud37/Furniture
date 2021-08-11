import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss']
})
export class MasonryComponent implements OnInit {

  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }
  navigate()
  {
    this._Router.navigate(['home']);
  }

}
