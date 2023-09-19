import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url = 'https://api.github.com/users/mosh-hamedani/followers'

  constructor(private http: HttpClient) { }

  getFollowers() {
    return this.http.get(this.url);
  }
}
