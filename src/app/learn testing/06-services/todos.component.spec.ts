import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable, from, of, throwError } from 'rxjs';

xdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    // service = new TodoService(null);
    component = new TodosComponent(service);
  });


  // this won't work coz of service in beforeEach()
  it('should have toDo list items', () => {
    // let todo = [1, 2, 3];

    // spyOn(service, 'getTodos').and.callFake(() => {
    //   // return an observable of todo array items
    //   return from([ todo ]);
    // })

    // component.ngOnInit();

    // //  we can call anyone from the below 3, if we are sure that only 3 items will come or like todo items will come then we can use
    // //  2nd and 3rd
    // expect(component.todos.length).toBeGreaterThan(0);
    // // expect(component.todos.length).toBe(3);
    // // expect(component.todos).toBe(todo);
  });


  it('should call the server for adding a new item', () => {
  //   let spy = spyOn(service, 'add').and.callFake(t => {
  //     return of();
  //   })

  //   component.add();

  //   expect(spy).toHaveBeenCalled();
  })



  it('should add a new item returned from the server', () => {
  //   let todo = { id: 1 } 

  //   // let spy = spyOn(service, 'add').and.callFake(t => {
  //   //   return from([ todo ]);
  //   // })
    
  //   //  we can write above code as 
  //   let spy = spyOn(service, 'add').and.returnValue(from([ todo ]));

  //   component.add();

  //   expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  })



  it('should return the error if server returns error when adding a new item', () => {
  //   let errMess = 'error comes from the server'

  //   let spy = spyOn(service, 'add').and.returnValue(throwError(errMess));

  //   component.add();

  //   expect(component.message).toBe(errMess);
  })


  it('should call the server if the user confirms to delete', () => {
    
    // spyOn(window, 'confirm').and.returnValue(true);
    // let spy = spyOn(service, 'delete').and.returnValue(of());

    // component.delete(1);

    // expect(spy).toHaveBeenCalledWith(1);
  })


  it('should not call the server if the user confirms to cancel', () => {
    
    // spyOn(window, 'confirm').and.returnValue(false);
    // let spy = spyOn(service, 'delete').and.returnValue(of());

    // component.delete(1);

    // expect(spy).not.toHaveBeenCalled();
  })
});




//  spyOn ----
// It allows you to spy on methods of objects or classes and track their behavior during testing. 
// You can use spyOn to create mock functions that replace the original functions and capture information about their calls


//  to disable a particular test or a suite, we can use as

// xit or xdescribe