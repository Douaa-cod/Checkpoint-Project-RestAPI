import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {
  route: string =""
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  goToRoute(){
    const LINK = [this.route]
    this.router.navigate(LINK)
  }

}
