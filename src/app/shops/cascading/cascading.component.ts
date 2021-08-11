import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cascading',
  templateUrl: './cascading.component.html',
  styleUrls: ['./cascading.component.scss']
})
export class CascadingComponent implements OnInit {

  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }
  navigate()
  {
    this._Router.navigate(['home']);
  }

}
