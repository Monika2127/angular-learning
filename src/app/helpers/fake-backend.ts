import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vbmlrYSBNaXR0YWwiLCJpYXQiOjE1MTYyMzkwMjIsImFkbWluIjp0cnVlfQ.ruk8K4tuIlQ5EIlX8Z6DC32pKCLHF5HjQ8meoSgeuHk';

    if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
      const body = JSON.parse(request.body);

      if (body.email === 'mona@domain.com' && body.password === '12345') {
        const mockResponse = { token };
        return of(new HttpResponse({ status: 200, body: mockResponse }));
      } else {
        return of(new HttpResponse({ status: 200, body: {} }));
      }
    }

    if (request.url.endsWith('/api/orders') && request.method === 'GET') {
      const headers = request.headers.get('Authorization');

      if (headers === 'Bearer ' + token) {
        const mockResponse = [1, 2, 3];
        return of(new HttpResponse({ status: 200, body: mockResponse }));
      } else {
        return of(new HttpResponse({ status: 401, body: {} }));
      }
    }

    // Pass through any other requests
    return next.handle(request);
  }
}
