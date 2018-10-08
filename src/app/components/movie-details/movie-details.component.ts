import {
  tap, debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../common/SearchResult';
import { MovieService } from '../../services/movie.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  searchResults: SearchResult[] = [];
  isLoading: boolean = false;
  private searchTerms = new Subject<string>();

  searchResults$: Observable<SearchResult[]>;

  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {

    this.searchResults$ = this.searchTerms.pipe(
      // tap(_ => this.isLoading = true),

      tap(_ => console.log('tap')),
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // tap(_ => this.isLoading = false),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.movieService.searchByTitle(term)),
    );
    // this.search('batman');
    this.searchTerms.next('batman');
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    console.log(`search: ${term}`);
    this.searchTerms.next(term);
  }
}
