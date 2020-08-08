import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";
import { Observable } from 'rxjs';
import { MovieItem } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  imagesPrefixUrl = environment.imagesPrefixUrl;
  movie$: Observable<MovieItem>;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.movie$ = this.movieService.getMovie(id);
    });
  }

}
