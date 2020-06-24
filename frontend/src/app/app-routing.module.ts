import { NewEventComponent } from './NewEvent/NewEvent.component';
import { PanelComponent } from './Panel/Panel.component';
import { HomeComponent } from './Home/Home.component';
import { EventsComponent } from './events/events.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'dashboard',
    component: PanelComponent,
  },
  {
    path: 'dashboard/new',
    component: NewEventComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
