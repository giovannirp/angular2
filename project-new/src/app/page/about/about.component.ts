import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import { About } from './about-sub/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  abouts: About[];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAbaout()
    .subscribe(abouts => this.abouts = abouts);
  }

}
