import { Component, OnInit } from '@angular/core';

import { AppMenuComponent } from '../app-menu/app-menu.component';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  social = {
    link: 'https://www.linkedin.com/in/giulia-tondin-621290145/',
    link_title: 'Open Linkedin profile'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
