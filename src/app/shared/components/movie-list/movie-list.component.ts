import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieList } from 'src/app/interfaces';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input ()
  results$: Observable<MovieList>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
