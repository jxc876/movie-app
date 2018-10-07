import { SearchResult } from './common/SearchResult';
import { MovieService } from './services/movie.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'movie-app';
  searchResults: SearchResult[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.searchByTitle('batman')
      .pipe(
        tap(results => console.log(results))
      )
      .subscribe(
        results => this.searchResults = results
      );
  }
}
