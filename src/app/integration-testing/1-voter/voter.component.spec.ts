import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('IT Voter Component', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    //  here, we have to create a fake dynamic module same as that of real module with TestBed
    TestBed.configureTestingModule({
      //  it can also take providers, imports, exports, etc
      declarations: [
        VoterComponent
      ]
    })

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;

    fixture.debugElement

  });


  //  1st test is to get the totalVotes as expected
  it('should render total votes correctly', () => {
    component.othersVote = 20;
    component.myVote = 1;

    // 3rd
    fixture.detectChanges();

    let det = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = det.nativeElement;

    const intVal = parseInt(el.innerHTML, 10);
    expect(intVal).toEqual(21);

  });

  
  //  to highlight the upVote button
  it('should highlight the upvote button if i have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let det = fixture.debugElement.query(By.css('.bi-chevron-up'));

    //  here we just want to be highlighted, so

    expect(det.classes['highlighted']).toBeTruthy();
  })


  //  handling events when clicks on up button
  it('should increase Total Votes when click on up button', () => {
    let button = fixture.debugElement.query(By.css('.bi-chevron-up'));


    button.triggerEventHandler('click', null);
    //  if work with UT, then we have to write
    //   component.upVote() instead of DOM event handler;

    expect(component.totalVotes).toBe(1);
  })


});


//  for creation an instance of component, we don't need to create it with 'new' keyword as of UT, here we have to ask Angular
//  to create the instance of component

//  TestBed class provides a number of utility functions
//  -Configures and initializes environment for unit testing and provides methods for creating components and services in unit tests.
//  .compileComponents, to compile all the components alongwith the template and CSS files which we have declared in the 
//    declaration array.


//  return type of 'TestBed.createComponent(VoterComponent)' => ComponentFixture<VoterComponent>
//  this component fixture is a wrapper around our component instance, from this, we can access both the template and component instance


//  fixture.nativeElement, returns an HTML element which is the root DOM element to this component template
//  fixture.debugElement, it is a wrapper around nativeElement, by using this, we can query the dumb.


//  3rd---
//  we need to run this line, to detect changes as Angular continuously runs its changes detection algo outside the testing
//  environment , so anytime we modify one of these properties in our code, Angular will be notified and update the corresponding
//  DOM element
//  But, in the testing env, Angular is not running its chnages detection algo, so we need to explicitly tell Angular to perform
//  change detection



//  we can combine both unit test and integration test