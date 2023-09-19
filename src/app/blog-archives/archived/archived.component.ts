import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.scss']
})
export class ArchivedComponent {

  year: number = 0;
  month: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   console.log(params)
    //   this.year = params.get('year');
    // })
    let params = this.route.snapshot.paramMap;
    this.year = +params.get('year')!;
    this.month = +params.get('month')!;
  }

  viewAll() {
    this.router.navigate(['/']);
  }
}
