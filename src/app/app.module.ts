import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatComponentModule } from './mat-component.module';


import { AuthService } from './services/auth.service';
import { UtilsService } from './services/utils.service';
import { OrderService } from './services/order.service';
import { GlobalError } from './common/app-error-global';
import { FakeBackendInterceptor } from './helpers/fake-backend';

import { NewDirDirective } from './directives/new-dir.directive';
import { NewPipePipe } from './pipes/new-pipe.pipe';

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { GithubComponent } from './github/github.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { BlogArchivesComponent } from './blog-archives/blog-archives.component';
import { ArchivedComponent } from './blog-archives/archived/archived.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TodosComponent } from './todos/todos.component';
import { ZippyComponent } from './zippy/zippy.component';
import { MaterialsComponent } from './materials/materials.component';
import { MatCourseComponent } from './materials/mat-course/mat-course.component';


const routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: '',
  //   component: BlogArchivesComponent
  // }, 
  {
    path: 'followers',
    component: GithubComponent
  }, {
    path: 'followers/:username/:id',
    component: GithubProfileComponent
  }, {
    path: 'posts',
    component: HttpExampleComponent
  }, {
    path: 'archive/:year/:month',
    component: ArchivedComponent
  }, {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'admin',
    component: AdminComponent,

  }, {
    //   if there is no match of url, then we can catch the url and show the not found view
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    NewDirDirective,
    NewPipePipe,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    NewCourseComponent,
    ChangePasswordComponent,
    HttpExampleComponent,
    GithubComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    GithubProfileComponent,
    BlogArchivesComponent,
    ArchivedComponent,
    TodosComponent,
    ZippyComponent,
    MaterialsComponent,
    MatCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //  forRoot() is to define root routes for the application
    RouterModule.forRoot(routes),

    // Material Module
    MatComponentModule
  ],
  providers: [
    UtilsService,
    provideAnimations(),
    //  import the GlobalError handler class here, to tell the Angular that instead of using the default ErrorHandler, use this
    //  GlobalErrorHandler
    {
      provide: ErrorHandler,      //  class which we want to replace
      useClass: GlobalError       //  the replacement class
    },
    AuthService,
    OrderService,

    //  Mock backend server
    FakeBackendInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
