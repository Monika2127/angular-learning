import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-archives',
  templateUrl: './blog-archives.component.html',
  styleUrls: ['./blog-archives.component.scss']
})
export class BlogArchivesComponent {

  blogs = [
    {
      year: 2017,
      month: 1
    }, {
      year: 2017,
      month: 2
    }, {
      year: 2017,
      month: 3
    }
  ]
}
