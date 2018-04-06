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

  constructor(public heroData: HeroDataService, private apiService: ApiService, private router: Router) { }

  pvPlayer1 = 200;
  pvPlayer2 = 200;
  player1 = this.heroData.fighter[0];
  player2 = this.heroData.fighter[1];
  hitsP1 = 0;
  lifeLostP1 = 0;
  hitsP2 = 0;
  lifeLostP2 = 0;
  switch = false;


  ngOnInit() {

  }

  headkick1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.intelligence;
    this.hitsP1 = this.hitsP1 + 1;
    this.lifeLostP2 = this.lifeLostP2 + this.player1.powerstats.intelligence;
    this.switch = true;
    if (this.pvPlayer2 <= 0) {
      alert("Hits taken by P2: " + this.hitsP1 + "\nHealth lost by P2: " + this.lifeLostP2 ); 
      alert("Hits taken by P1: " + this.hitsP2 + "\nHealth lost by P1: " + this.lifeLostP1 );  
      alert("Player 1 wins. You will soon be redirected to the character selection page.");
      this.router.navigate(['/test']);

    }
  }

  punch1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.power;
    console.log(this.pvPlayer2);
    this.hitsP1 = this.hitsP1 + 1;
    this.lifeLostP2 = this.lifeLostP2 + this.player1.powerstats.power;
    this.switch = true;
    if (this.pvPlayer2 <= 0) {
      alert("Hits taken by P2: " + this.hitsP1 + "\nHealth lost by P2: " + this.lifeLostP2 );
      alert("Hits taken by P1: " + this.hitsP2 + "\nHealth lost by P1: " + this.lifeLostP1 );
      alert("Player 1 wins. You will soon be redirected to the character selection page.");
      this.router.navigate(['/test']);
    }
  }

  frontkick1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.combat;
    console.log(this.pvPlayer2);
    this.hitsP1 = this.hitsP1 + 1;
    this.lifeLostP2 = this.lifeLostP2 + this.player1.powerstats.combat;
    this.switch = true;
    if (this.pvPlayer2 <= 0) {
      alert("Hits taken by P2: " + this.hitsP1 + "\nHealth lost by P2: " + this.lifeLostP2 );
      alert("Hits taken by P1: " + this.hitsP2 + "\nHealth lost by P1: " + this.lifeLostP1 );
      alert("Player 1 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  uppercut1(){
    this.pvPlayer2 = this.pvPlayer2 - this.player1.powerstats.speed;
    console.log(this.pvPlayer2);
    this.hitsP1 = this.hitsP1 + 1;
    this.lifeLostP2 = this.lifeLostP2 + this.player2.powerstats.speed;
    this.switch = true;
    if (this.pvPlayer2 <= 0) {
      alert("Hits taken by P2: " + this.hitsP1 + "\nHealth lost by P2: " + this.lifeLostP2 );
      alert("Hits taken by P1: " + this.hitsP2 + "\nHealth lost by P1: " + this.lifeLostP1 );
      alert("Player 1 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  headkick2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.intelligence;
    console.log(this.pvPlayer1);
    this.hitsP2 = this.hitsP2 + 1;
    this.lifeLostP1 = this.lifeLostP1 + this.player2.powerstats.intelligence;
    this.switch = false;
    if (this.pvPlayer1 <= 0) {
      alert("Hits taken by P1: " + this.hitsP2 + "\nHealth lost by P1: " + this.lifeLostP1 );
      alert("Hits taken by P2: " + this.hitsP1 + "\nHealth lost by P2: " + this.lifeLostP2 );
      alert("Player 2 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  punch2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.power;
    console.log(this.pvPlayer1);
    this.hitsP2 = this.hitsP2 + 1;
    this.lifeLostP1 = this.lifeLostP1 + this.player2.powerstats.power;
    this.switch = false;
    if (this.pvPlayer1 <= 0) {
      alert("Hits taken by P1: " + this.hitsP2 + "\nHealth lost by P1: " + this.lifeLostP1 );
      alert("Hits taken by P2: " + this.hitsP1 + "\nHealth lost by P2: " + this.lifeLostP2 );
      alert("Player 2 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  frontkick2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.combat;
    console.log(this.pvPlayer1);
    this.hitsP2 = this.hitsP2 + 1;
    this.lifeLostP1 = this.lifeLostP1 + this.player2.powerstats.power;
    this.switch = false;
    if (this.pvPlayer1 <= 0) {
      alert("Hits taken by P1: " + this.hitsP2 + "\nHealth lost by P1: " + this.lifeLostP1 );
      alert("Hits taken by P2: " + this.hitsP1 + "\nHealth lost by P2: " + this.lifeLostP2 );
      alert("Player 2 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

  uppercut2(){
    this.pvPlayer1 = this.pvPlayer1 - this.player2.powerstats.speed;
    console.log(this.pvPlayer1);
    this.hitsP2 = this.hitsP2 + 1;
    this.lifeLostP1 = this.lifeLostP1 + this.player2.powerstats.speed;
    this.switch = false;
    if (this.pvPlayer1 <= 0) {
      alert("Hits taken by P1: " + this.hitsP2 + "\nHealth lost by P1: " + this.lifeLostP1 );
      alert("Hits taken by P2: " + this.hitsP1 + "\nHealth lost by P2: " + this.lifeLostP2 );
      alert("Player 2 wins. You will soon be redirected to the character selection page.")
      this.router.navigate(['/test']);
    }
  }

}
