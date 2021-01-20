import { Spacex } from './../../models/spacex.interface';
import { SpacexService } from './../../_services/spacex.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details-launch',
  templateUrl: './details-launch.component.html',
  styleUrls: ['./details-launch.component.css']
})
export class DetailsLaunchComponent implements OnInit {

  constructor(private spacexService: SpacexService, private route: ActivatedRoute) { }

  launch: any;

  ngOnInit(): void {
    const launchId = this.route.snapshot.params['id'];
    this.getLaunch(launchId);
  }

  getLaunch(id:string){
    //var input = input("Ingrese id: ");
    this.spacexService.getLaunch(id).
    subscribe(launch => (this.launch = launch));
  }

}
