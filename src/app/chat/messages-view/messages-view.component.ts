import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['./messages-view.component.scss']
})
export class MessagesViewComponent implements OnInit {
  user = {
    fullName: 'Adrian Faciu'
  };

  messages = [
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: true
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: true
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: true
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: true
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: true
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: true
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: true
    },
    {
      text:
        'bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd bla bla bla as er asd asd qwer asd',
      isOwn: false
    }
  ];

  constructor() {}

  ngOnInit() {}
}
