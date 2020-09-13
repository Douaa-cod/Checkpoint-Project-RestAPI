import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne'
import { EmbaucheService } from '../services/embauche.service'

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  embauches : Personne[]
  constructor(
    private embaucheServices : EmbaucheService
  ) { }

  ngOnInit(): void {
    this.embauches = this.embaucheServices.getEmbauchees()
  }

}
