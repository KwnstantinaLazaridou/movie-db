import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { MovieList } from 'src/app/interfaces';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  kidsResults$: Observable<MovieList>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.kidsResults$ = this.moviesService.getKids();
  }

}
