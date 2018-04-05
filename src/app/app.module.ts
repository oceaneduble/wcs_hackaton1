import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; // Import Http Client
import { ApiService } from './shared/api.service';

import { RouterModule, Routes } from '@angular/router'; // Routing import

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
