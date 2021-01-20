import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexComponent } from './components/spacex/spacex.component';
import { DetailsLaunchComponent } from './components/details-launch/details-launch.component';
import { Page404Component } from './components/page404/page404.component'; 
import { ListLaunchesComponent } from './components/list-launches/list-launches.component';


const routes: Routes = [
  {path: '', component: SpacexComponent},
  {path: 'launches/:id', component: DetailsLaunchComponent},
  {path: 'launches', component: ListLaunchesComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
