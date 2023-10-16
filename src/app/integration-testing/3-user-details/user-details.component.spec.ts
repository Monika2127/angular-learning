import { Observable, Subject, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';

class RouterStub {
  navigate(params: any) { }
}

class ActivatedRouteStub {
  //  for writing/pushing the data

  public subj = new Subject();

  push(value: any) {
    this.subj.next(value);
  }

  // instead of using params as this, we can use it like
  // params: Observable<any> = of();

  get params() {
    return this.subj.asObservable();
  }
}

describe('IT User Details Component', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ],
      declarations: [UserDetailsComponent]
    })

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;

    // fixture.detectChanges();
  });



  it('should redirect the user to the users page after saving', () => {
    //  this Router will take RouterStub
    let router: RouterStub = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['followers'])
  });



  it('should navigate the user to not found page when an invalid user id is passed', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    fixture.detectChanges();

    //  this code is not working, showing error as 
    //     Type 'ActivatedRoute' is missing the following properties from type 'ActivatedRouteStub': subj, push

    // 69     let route: ActivatedRouteStub = TestBed.inject(ActivatedRoute)

    // let route: ActivatedRouteStub = TestBed.inject(ActivatedRoute)
    // //  here, we can only read the data bu to push the data, we have to use Subject
    // route.push({ id: 0 });

    // route.params.subscribe(() => {
    //   expect(spy).toHaveBeenCalledWith(['not-found'])
    // })  

  });



});


//  here instead of creating the instance of real Router and ActivatedRoute, we have to create its fake implementation as stub