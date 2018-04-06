import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Routing import
import { Router } from '@angular/router';
import { HeroDataService } from '../shared/hero-data.service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  constructor(public heroData: HeroDataService, private apiService: ApiService) { }

  pvPlayer1 = 200;
  pvPlayer2 = 200;
  player1 = this.heroData.fighter[0];
  player2 = this.heroData.fighter[1];


  ngOnInit() {
  /*  console.log(this.heroData.fighter);
    console.log(player1, player2); */
  }

  headkick1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.intelligence;
    console.log(this.pvPlayer2);
    if (this.pvPlayer2 <= 0) {
      console.log("Player 1 wins");
    }
  }

  punch1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.power;
    console.log(this.pvPlayer2);
    if (this.pvPlayer2 <= 0) {
      console.log("Player 1 wins");
    }
  }

  frontkick1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.combat;
    console.log(this.pvPlayer2);
    if (this.pvPlayer2 <= 0) {
      console.log("Player 1 wins");
    }
  }

  uppercut1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.speed;
    console.log(this.pvPlayer2);
    if (this.pvPlayer2 <= 0) {
      console.log("Player 1 wins");
    }
  }

  headkick2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.intelligence;
    console.log(this.pvPlayer1);
    if (this.pvPlayer1 <= 0) {
      console.log("Player 2 wins");
    }
  }

  punch2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.power;
    console.log(this.pvPlayer1);
    if (this.pvPlayer1 <= 0) {
      console.log("Player 2 wins");
    }
  }

  frontkick2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.combat;
    console.log(this.pvPlayer1);
    if (this.pvPlayer1 <= 0) {
      console.log("Player 2 wins");
    }
  }

  uppercut2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.speed;
    console.log(this.pvPlayer1);
    if (this.pvPlayer1 <= 0) {
      console.log("Player 2 wins");
    }
  }
}
