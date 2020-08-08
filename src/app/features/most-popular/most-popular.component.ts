import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {MovieList} from '../../interfaces';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {

  popularResults$: Observable<MovieList>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.popularResults$ = this.moviesService.getMostPopular();
  }

}
