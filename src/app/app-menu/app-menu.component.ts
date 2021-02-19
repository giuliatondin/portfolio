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
      title: 'Home',
      page: '/'
    },
    {
      title: 'Work',
      page: '/work'
    },
    {
      title: 'Contact',
      page: '/contact'
    }
  ]

  socials = [
    { 
      icon: '../../assets/imgs/linkedin.svg',
      link: 'https://www.linkedin.com/in/giulia-tondin-621290145/',
      link_title: 'Open Linkedin profile' 
    },
    {
      icon: '../../assets/imgs/github.svg',
      link: 'https://github.com/giuliatondin',
      link_title: 'Open Github profile'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
