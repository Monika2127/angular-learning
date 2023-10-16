import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { map } from 'rxjs';

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo: { title: string; }) {
    return this.http.post('...', todo).pipe(
      map((r) => r)
    )
  }

  getTodos() { 
    return this.http.get('...').pipe(
      map((r) => r)
    )
  }

  getTodosPromise() {
    return new Promise((resolve, reject) => {
      resolve([1, 2, 5]);
      // reject('error');
    })
  }

  delete(id: any) {
    return this.http.delete('...').pipe(
      map((r) => r)
    )
  }
}