import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TripListCardComponent } from './trip-list-card/trip-list-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripNewComponent } from './trip-new/trip-new.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const appRoutes: Routes = [
   {path: 'trips', component: TripListComponent},
   {path: 'trips/new', component: TripNewComponent, pathMatch: 'full'},
   {path: 'trips/:id', component: TripDetailsComponent},

]

@NgModule({
   declarations: [
      AppComponent,
      TripListComponent,
      TripDetailsComponent,
      NavBarComponent,
      TripListCardComponent,
      TripNewComponent
   ],
   imports: [
      HttpClientModule,
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(
         InMemoryDataService, { dataEncapsulation: false } ),
         RouterModule.forRoot(appRoutes),
      BrowserModule,
      BrowserAnimationsModule,
      TabsModule.forRoot(),
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
