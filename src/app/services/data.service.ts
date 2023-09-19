import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { AppError, BadError, NoFoundError } from '../common/app-error';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    //   private url = 'https://djsonplaceholder.typicode.com/posts';
    private url: string;

    //  Getting error here as string type is not used as injection
    constructor(url: string, private http: HttpClient) {
        this.url = url;
    }

    //  HTTP  CALLS

    getData() {
        return this.http.get<object[]>(this.url).pipe(


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

    updateData(resource: any) {
        return this.http.patch(this.url + '/' + resource.id, { isRead: true });
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
