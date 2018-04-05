import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './shared/api.service';

/*interface UserResponse {
  id: number;
  name: string;
  powerstats: object;
  biography: object;
}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'app';
    
    constructor(private apiService: ApiService) { }
    
    ngOnInit() {
    this.apiService.getHeroes().subscribe(heroes => {
    console.log(heroes);
    });










/*
  ngOnInit(): void {
    this.http.get<UserResponse>('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe(data => {
      for (let i = 0; i < 10; i++){ 
      console.log("id: " + data[0].id);
      console.log("name: " + data[0].name);
      console.log("powerstats/intel: " + data[0].powerstats.intelligence);
      console.log("powerstats/str: " + data[0].powerstats.strength);
      console.log("powerstats/speed: " + data[0].powerstats.speed);
      console.log("powerstats/durab: " + data[0].powerstats.durability);
      console.log("powerstats/power: " + data[0].powerstats.power);
      console.log("powerstats/combat: " + data[0].powerstats.combat);
      console.log("biography: " + data[0].biography.fullName);
      } 
    }); */
  }
}
