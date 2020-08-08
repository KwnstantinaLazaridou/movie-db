import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieList } from 'src/app/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults$: Observable<MovieList>;
  searchTerm: string;

  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.searchTerm = params.get("searchTerm");
      this.searchResults$ = this.movieService.searchMovie(this.searchTerm);
    })
  }

}
