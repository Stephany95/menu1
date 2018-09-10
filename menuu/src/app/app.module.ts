import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
/* import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, RouteConfigLoadStart } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
/*import {FormsModule } from '@angular/core';*/
import {HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
 
const appRoutes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule
    /*FormsModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
const appRoutes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent }
];*/