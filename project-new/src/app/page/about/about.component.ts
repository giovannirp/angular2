import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { About } from '../../models/about.model';

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
