// ng imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// app imports
import { API_KEY } from './../constants';
import { SearchResult } from './../common/SearchResult';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // -------- PROPERTIES -----------

  private API_DOMAIN = 'http://www.omdbapi.com';
  private API_URL = `${this.API_DOMAIN}/?apikey=${API_KEY}`;

  // -------- CONSTRUCTOR -----------
  constructor(private http: HttpClient) { }

  // -------- PUBLIC METHODS -----------

  // http://www.omdbapi.com/?apikey=164b2adb&s=batman
  searchByTitle(tite: string): Observable<SearchResult[]> {
    console.log('*****************');
    const SEARCH_URL = `${this.API_URL}&s=${tite}`;
    console.log('-------------------------------------');
    console.log(`MovieService.searchByTitle, term: ${tite}`);
    console.log(`MovieService.searchByTitle, URL: ${SEARCH_URL}`);
    return this.http.get<SearchResult[]>(SEARCH_URL)
      .pipe(
        map(searchObj => searchObj['Search']),
      );
  }
}
