import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  heroes;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });

  }

  chooseHero() {

    }

  }



