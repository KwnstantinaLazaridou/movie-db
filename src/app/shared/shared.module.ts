import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieDetailsComponent,
    NavbarComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    MovieDetailsComponent,
    NavbarComponent,
    MovieListComponent
  ]
})
export class SharedModule { }
