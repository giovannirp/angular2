import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  items = [1, 2 , 3, 4, 1, 2 , 3, 4, 1, 2 , 3, 4, 1, 2 , 3, 4];

  ngOnInit() {
  }

}
