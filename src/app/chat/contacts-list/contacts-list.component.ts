import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts = [
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: false,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: false,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    },
    {
      name: 'Adrian',
      status: 'foo',
      isOnline: true,
      img: '/assets/profile-man.svg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
