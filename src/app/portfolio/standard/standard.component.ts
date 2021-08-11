import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements OnInit {

  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }
  navigate()
  {
    this._Router.navigate(['home']);
  }

}
