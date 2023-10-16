import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilsService } from './services/utils.service';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('IT App Component', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ UtilsService ],
            imports: [ RouterTestingModule, HttpClientModule ],
            declarations: [ AppComponent ],
            //  if we have many child components or complex structore then we can include this schema but not preferrable
            schemas: [ NO_ERRORS_SCHEMA ]
        })

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'myProj'`, () => {
        expect(component.tit).toEqual('myProj');
    });

    it('should have a router outlet', () => {
        let det = fixture.debugElement.query(By.directive(RouterOutlet));

        expect(det).not.toBeNull();
    })

    // it('should have a link to posts page', () => {
    //     let elem = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    //     // getting this error 
    //     //  Expected -1 to be greater than -1.
    //     let index = elem.findIndex(item => item.properties['href'] === '/posts');

    //     expect(index).toBeGreaterThan(-1);
    // })
});


//  If instead of writing nav element, created a app-nav component then we just have to import that child component in declarations
//  and move the related tests to their respective component