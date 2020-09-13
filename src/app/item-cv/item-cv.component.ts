import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Model/Personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
@Input() dataPersonneItem : Personne
  constructor(
    private cvService : CvService
  ) { }

  ngOnInit(): void {
  }

  clickPerson(){
    this.cvService.click();
    this.cvService.clickOnItem(this.dataPersonneItem)
  }

}
