import { Component, OnInit } from '@angular/core';
import { env } from 'src/environments/environments';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  bgColor = env.bgColor;

  constructor() { }

  ngOnInit() {
  }

}
