import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from '../Model/Personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  //personToAdd : Personne
  constructor(
    private cvService : CvService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  add(personToAdd: Personne){
    let link = ['CVs']
    this.cvService.addPerson(personToAdd)
    this.router.navigate(link)
  }
}
