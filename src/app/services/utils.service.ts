import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { catchError } from 'rxjs';
import { AppError, BadError, NoFoundError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})

//  As dataservice is the parent of utils service, first it will initialize the parent constructor using super and then we
//  can use the functions of parent
//  used to implement the common reusable data service, as say, like posts, we have courses, menu, etc.
export class UtilsService {
  data: any = {};
  public loginData = new BehaviorSubject<boolean>(true);
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  //  BEHAVIOUR  SUBJECT

  setLogin(value: boolean) {
    this.loginData.next(value);
  }

  getLogin() {
    return this.loginData.asObservable();
  }

  //  HTTP  CALLS

  getData() {
    return this.http.get<object[]>(this.url).pipe(

      map(response => {
        console.log(response)
        return response;
      }),

      // catchError((err: Response) => {
      //   if (err.status === 400)
      //     throw new BadError(err);

      //   throw new AppError(err);
      // })



      // We can also do it by adding a private handleError method for reusable errors and pass the reference here like

      catchError((err: Response) => {
        throw this.handleErrors(err);
      })

    )
  }

  createData(options: any) {
    return this.http.post(this.url, options)
  }

  updateData(post: any) {
    return this.http.patch(this.url + '/' + post.id, { isRead: true });
  }

  deleteData(id: number) {
    return this.http.delete(this.url + '/' + id).pipe(
      //  catching the error like this by throwing a error

      // catchError((err: Response) => {
      //   if (err.status == 404)                  //  check the status and throw specific error
      //     throw new NoFoundError(err);
      //   else {
      //     // alert(err.statusText);
      //     throw new AppError(err)
      //   }
      //   // throw new AppError(err)                     //  specific error throw
      //   // throw new Error(err.statusText)          //  normal error throw

      // })


      catchError((err: Response) => {
        throw this.handleErrors(err);
      })
      
    );;
  }


  private handleErrors(err: Response) {
    if (err.status === 400)
      throw new BadError(err);

    if (err.status == 404)                  //  check the status and throw specific error
      throw new NoFoundError(err);

    throw new AppError(err)
  }
}
