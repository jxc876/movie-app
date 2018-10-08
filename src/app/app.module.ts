// ng imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';


// app imports
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
