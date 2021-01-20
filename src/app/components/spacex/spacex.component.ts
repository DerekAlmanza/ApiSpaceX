import { Component, OnInit } from '@angular/core';
import { SpacexService } from './../../_services/spacex.service';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})
export class SpacexComponent implements OnInit {
  title = 'angular-http-client';
  
  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {}

}
