import { fakeAsync, tick } from '@angular/core/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('IT Todos Component', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;

  });


  // FOR OBSERVABLE RETURN
  it('should call the service on onInit', () => {
    let service =  TestBed.inject(TodoService);
    let todo = [1, 2, 3];

    spyOn(service, 'getTodos').and.returnValue(from([ todo ]));

    //  coz it will be already called and it's too late to change the implementation, that's why it is moved here from beforeEach()
    fixture.detectChanges();

    // expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos).toBe(todo);
  });


  //  FOR PROMISE RETURN
  it('should call the service on onInit in promise', async () => {
    let service =  TestBed.inject(TodoService);
    let todo = [1, 2, 3];
    
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve(todo));

    fixture.detectChanges();

    //  this is used coz the testing is called before the result in promise that's why we have to wait for promise data to come
    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    })

    //  either the above can be used with async or we can also use FakeAsync with tick as but this is not working, so better to work with
    //  above approach
    //  tick();
  });
});
