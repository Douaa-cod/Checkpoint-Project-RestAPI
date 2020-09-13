import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../Model/Personne';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service'

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: [
    './detail-cv.component.css',
    './rotating-card.css',
  ]
})
export class DetailCvComponent implements OnInit {
  dataPerson : Personne
  constructor(
    private embaucheService : EmbaucheService,
    private router : Router,
    private cvService : CvService
  ) { }

  ngOnInit(): void {
    this.cvService.selectItemSubject.subscribe(
      (personne) => this.dataPerson = personne
    )
  }
  embaucher(personne: Personne){
    this.embaucheService.embaucher(personne)
  }
  goToDetails(){
    const LINK = ['CVs', this.dataPerson.id]
    this.router.navigate(LINK)
  }

}
