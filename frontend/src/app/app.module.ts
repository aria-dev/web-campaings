import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './Home/Home.component';
import { PanelComponent } from './Panel/Panel.component';
import { NewEventComponent } from './NewEvent/NewEvent.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
   declarations: [
      AppComponent,
      EventsComponent,
      NavComponent,
      HomeComponent,
      PanelComponent,
      NewEventComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
