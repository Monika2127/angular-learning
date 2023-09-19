import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //  ngOnInit will be called once, but say if there is a button which changes the route params and retains this page only
    //  without destroying and reinitialize it, then we need to use, paramMap, as it will subscribe whenever we want to
    //  stay in the same page while changing the routes params
    this.route.paramMap.subscribe(params => {
      let name = params.get('username')
      console.log(params)
    })

    //  but if it is 100% sure, that you want to navigate to different page, then you can use, snapshot, as
    let id = this.route.snapshot.paramMap.get('username');
    console.log(id)
  }

  submit() {
    // this.router.navigate(['/followers'], 12, 133), passing the required parameters

    // for passing the query parameters
    this.router.navigate(['/followers'], {
      queryParams: {
        page: 'original'
      }
    })
  }

}
