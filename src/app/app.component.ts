import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpacexService } from './_services/spacex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceXapi';
  
  constructor(private spacexService: SpacexService) { }
  
//  getLaunch(){
//    //var input = input("Ingrese id: ");
//    this.spacexService.getLaunch('5eb87cd9ffd86e000604b32a').
//    subscribe(launch => {
//      console.log(launch);
//    });
//  }
}
