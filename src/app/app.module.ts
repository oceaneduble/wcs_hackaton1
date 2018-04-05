import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; // Import Http Client
import { ApiService } from './shared/api.service';

import { RouterModule, Routes } from '@angular/router'; // Routing import

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FightComponent } from './fight/fight.component';
import { HeroDataService } from './shared/hero-data.service';

const appRoutes: Routes = [
  { path: '', component: TestComponent },
  { path: 'test', component: TestComponent },
  { path: 'fight', component: FightComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FightComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [ApiService,
  HeroDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
