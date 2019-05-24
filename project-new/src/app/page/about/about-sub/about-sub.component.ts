import { Component, OnInit, Input } from '@angular/core';
import { About } from './about.model';

@Component({
  selector: 'app-about-sub',
  templateUrl: './about-sub.component.html',
  styleUrls: ['./about-sub.component.scss']
})
export class AboutSubComponent implements OnInit {

  @Input() about: About;

  constructor() { }

  ngOnInit() {
  }

}
