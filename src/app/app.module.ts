import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ListLaunchesComponent } from './components/list-launches/list-launches.component';
import { Page404Component } from './components/page404/page404.component';
import { DetailsLaunchComponent } from './components/details-launch/details-launch.component';

// Services
import { SpacexService } from './_services/spacex.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ListLaunchesComponent,
    Page404Component,
    DetailsLaunchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [SpacexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
