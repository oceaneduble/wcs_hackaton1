import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Routing import
import { Router } from '@angular/router';
import { Input } from '@angular/core/src/metadata/directives';
import { HeroDataService } from '../shared/hero-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  heroes;
  playerNumber = 0;
  fighter = [];

  constructor(private apiService: ApiService, private router: Router, private heroData: HeroDataService) {}

  ngOnInit() {
    this.apiService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
  }

  chooseHero(index) {
    this.heroData.fighter[this.playerNumber] = this.heroes[index];
    this.playerNumber++;
    if(this.fighter.length == 2) {
      this.router.navigate(['/fight']);
    }
    }

  }



