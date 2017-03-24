import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { DieComponent } from './die/die.component';
import { CrowComponent } from './crow/crow.component';
import { TreesComponent } from './trees/trees.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    DieComponent,
    CrowComponent,
    TreesComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
