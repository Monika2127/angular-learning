/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core'; 

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})


class DirectiveHostComponent { 
}


describe('IT Highlight Directive', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })

    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); 
  });


  it('should highlight the element with cyan color', () => {
    let det = fixture.debugElement.queryAll(By.css('p'))[0];

    expect(det.styles['backgroundColor']).toBe('cyan')
  })


  it('should highlight with default color', () => {
    let det = fixture.debugElement.queryAll(By.css('p'))[1];
    let dir = det.injector.get(HighlightDirective);

    //  this is for injecting some service which will be used in providers array
    // let x = TestBed.inject(HighlightDirective);

    expect(det.styles['backgroundColor']).toBe(dir.defaultColor)
  })
});
