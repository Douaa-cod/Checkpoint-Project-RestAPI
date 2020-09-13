import { Component, OnInit } from '@angular/core';
import { CvService } from './services/cv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private cvService: CvService
   ) {}
  title = 'checkpoint-Components';
  nbClick : number;
  ngOnInit(): void {
    this.cvService.clickSubject.subscribe(
      (nbClick) => { this.nbClick = nbClick}
    );
  }
}
