import { Component, OnInit } from '@angular/core';
import { SpacexService } from './../../_services/spacex.service';
import { Spacex } from './../../models/spacex.interface';

@Component({
  selector: 'app-list-launches',
  templateUrl: './list-launches.component.html',
  styleUrls: ['./list-launches.component.css']
})
export class ListLaunchesComponent implements OnInit {

  constructor(private spacexService: SpacexService) { }
  
  declare launches: any;

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(){
    this.spacexService.getAllLaunches().
    subscribe((launches : Spacex) => this.launches = launches);
  }
}
