import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrgComponent } from './drg/drg.component';

import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavouriteBookComponent } from './favourite-book/favourite-book.component';
import { AllBookComponent } from './all-book/all-book.component';

@NgModule({
  declarations: [
    AppComponent,
    DrgComponent,
    FavouriteBookComponent,
    AllBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    PanelModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
