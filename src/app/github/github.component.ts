import { ActivatedRoute } from '@angular/router';
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  follow: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private git: GithubService
  ) { }

  ngOnInit() {
    // required parameters

    this.route.paramMap.subscribe()
    let id = this.route.snapshot.paramMap.get('username');

    // to get the queryParams, we use, queryParamMap instead of paramMap

    this.route.queryParamMap.subscribe()
    let page = this.route.snapshot.queryParamMap.get('page');

    // to combine these two observables, we can use, we have to see this
    // TODO

    concat(
      this.route.paramMap,
      this.route.queryParamMap
    ).subscribe(params => {
      console.log("herre!!!", params)
    })

    this.getData();
  }

  getData() {
    this.git.getFollowers().subscribe(response => {
      this.follow = this.modifyData(response);
    })
  }

  modifyData(data: any) {
    let result: any[] = [];

    data.forEach((item: any) => {
      let obj: any = {};
      obj['avatar'] = item['avatar_url']
      obj['name'] = item['login']
      obj['url'] = item['html_url']
      obj['id'] = item['id']

      result.push(obj);
    });

    return result;
  }

}
