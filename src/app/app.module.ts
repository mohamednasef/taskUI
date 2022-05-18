import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ChartBarComponent } from './component/chart-bar/chart-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './component/table/table.component';
import {MatTableModule} from '@angular/material/table';
import { ChsrtJsComponent } from './component/chsrt-js/chsrt-js.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChartBarComponent,
    TableComponent,
    ChsrtJsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
