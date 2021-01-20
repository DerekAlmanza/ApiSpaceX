import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Spacex } from './../models/spacex.interface';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) {}

  private api = 'https://api.spacexdata.com/v4/launches';
  declare launches: Observable<any>;
  declare launch: Observable<any>;

  getAllLaunches(){
    const path = `${this.api}`;
    return this.http.get<Spacex>(path);
  }

  getLaunch(id:string){
    const path = `${this.api}/${id}`;
    return this.http.get<Spacex>(path);
  }
}
