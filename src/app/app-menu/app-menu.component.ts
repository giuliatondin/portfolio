import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  teste = 'testando sem for'

  links = [
    {
      title: 'About'
    },
    {
      title: 'Work'
    },
    {
      title: 'Contact'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
