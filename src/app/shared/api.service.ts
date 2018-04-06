import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

api_url = 'https://akabab.github.io/superhero-api/api/';

constructor(private http: HttpClient) { }

getHeroes() {
return this.http.get(this.api_url + 'all.json');
}

getId(id) {
  return this.http.get(this.api_url + 'id/' + id + '.json');
}
/*
getIntel(intel) {
  return this.http.get(this.api_url + 'powerstats' + intel + '.json');
}*/

}
