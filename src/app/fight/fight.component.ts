import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Routing import
import { Router } from '@angular/router';
import { HeroDataService } from '../shared/hero-data.service';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  constructor(private heroData: HeroDataService) { }

  ngOnInit() {
  }

}
