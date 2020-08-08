import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {MovieItem,MovieList} from 'src/app/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMostPopular(): Observable<MovieList> {

    const url = `${environment.apiEndpoint}/discover/movie?sort_by=popularity.desc&api_key=${environment.apiKey}`;
    return this.http.get(url).pipe(
      map(response => response as MovieList)
    );
  }

  getKids(): Observable<MovieList> {

    const url = `${environment.apiEndpoint}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${environment.apiKey}`;
    return this.http.get(url).pipe(
      map(response => response as MovieList)
    );
  }

  getMovie(id: string): Observable<MovieItem>{

    const url = `${environment.apiEndpoint}/movie/${id}?api_key=${environment.apiKey}`
    return this.http.get(url).pipe(
      map(response => response as MovieItem)
    );
  }

  searchMovie(searchTerm: string): Observable<MovieList>{

    const url = `${environment.apiEndpoint}/search/movie?query=${searchTerm}&api_key=${environment.apiKey}`
    return this.http.get(url).pipe(
      map(response => response as MovieList)
    );
  }
}
