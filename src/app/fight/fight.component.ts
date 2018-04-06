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

  constructor(public heroData: HeroDataService, private apiService: ApiService, private router: Router,) { }

  pvPlayer1 = 200;
  pvPlayer2 = 200;
  player1 = this.heroData.fighter[0];
  player2 = this.heroData.fighter[1];


  ngOnInit() {

  }

  headkick1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.intelligence;
    console.log(this.pvPlayer2);
    if (this.pvPlayer2 <= 0) {
      alert("Player 1 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  punch1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.power;
    console.log(this.pvPlayer2);
    if (this.pvPlayer2 <= 0) {
      alert("Player 1 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  frontkick1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.combat;
    console.log(this.pvPlayer2);
    if (this.pvPlayer2 <= 0) {
      alert("Player 1 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  uppercut1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.speed;
    console.log(this.pvPlayer2);
    if (this.pvPlayer2 <= 0) {
      alert("Player 1 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  headkick2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.intelligence;
    console.log(this.pvPlayer1);
    if (this.pvPlayer1 <= 0) {
      alert("Player 2 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  punch2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.power;
    console.log(this.pvPlayer1);
    if (this.pvPlayer1 <= 0) {
      alert("Player 2 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  frontkick2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.combat;
    console.log(this.pvPlayer1);
    if (this.pvPlayer1 <= 0) {
      alert("Player 2 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  uppercut2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.speed;
    console.log(this.pvPlayer1);
    if (this.pvPlayer1 <= 0) {
      alert("Player 2 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }
}
