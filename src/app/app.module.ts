import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FriendsComponent} from './friends/friends.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import {DataTableModule} from "angular2-datatable";

import { DataFilterPipe }   from './data-filter-pipe';
import { RemoteFriendsComponent } from './remote-friends/remote-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    DataFilterPipe,
    RemoteFriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
