import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Model/Personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {
Personnes: Personne[]
  constructor(
    private cvService : CvService
  ) { }

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (data) => this.Personnes = data,
      (erreur) => {
        this.Personnes = this.cvService.getFakePersonnes();
        alert ('Problem to connect, THIS DATA IS FAKE! ');
      }
    )
  }

}
