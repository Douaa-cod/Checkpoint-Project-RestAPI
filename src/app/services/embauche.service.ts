import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  embauchees : Personne[] = []
  constructor() { }
  getEmbauchees(): Personne[]{
    return this.embauchees
  }
  embaucher(personne: Personne) {
    let index = this.embauchees.indexOf(personne)
    if (index === -1) {
      this.embauchees.push(personne)
    }else {
      alert (`${personne.firstname} ${personne.name} est déja sélectionné`)
    }
  }
}
