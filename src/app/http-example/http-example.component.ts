import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { AppError, BadError, NoFoundError } from '../common/app-error';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.scss']
})
export class HttpExampleComponent implements OnInit {

  posts: any[] = [];


  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.utils.getData().subscribe({
      next: (response) => {
        this.posts = response;
        console.log(response)
      },
      error: (err: AppError) => {
        if (err instanceof BadError)
          //  if something we have to set errors in form, then we can do it like this
          //  this.myForm.setErrors(err.originalError);
          alert('Bad error')
        //  re-throwing the error to handle globally by GlobalErrorHandler
        else throw err;
      }
    })
  }

  createPost(input: HTMLInputElement) {
    let options: any = {
      title: input.value
    }

    input.value = ''

    this.utils.createData(options).subscribe({
      next: (response) => {
        let data: any = response
        options['id'] = data.id
        this.posts.splice(0, 0, data);
      }
    })
  }

  // we can send put or patch both but with put, we have to send the whole object but with PathLocationStrategy, we just
  // have to send the properties which we want to update

  updatePost(post: any) {
    this.utils.updateData(post).subscribe({
      next: (response) => { }
    })
  }

  deletePost(post: any) {
    this.utils.deleteData(10000).subscribe({
      next: () => {
        console.log("here")
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      //  here, we don't have to check error of type Response and check the status, we can set it in service and give the 
      //  code related custom error here 
      error: (e: AppError) => {
        console.log(e)
        //  here, we just set e as an instance of NoFoundError class for the expected error
        if (e instanceof NoFoundError)
          alert('this post is already deleted')
        else {
          alert('An unexpected error occurred');
        }
      }
    })
  }
}
