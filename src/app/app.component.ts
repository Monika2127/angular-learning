import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { UtilsService } from './services/utils.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {

  tit = 'myProj';
  title!: Event;
  data: String = '';
  login: boolean = false
  parentCounter = 0;
  

  incrementCounter() {
    this.parentCounter++;
  }

  

  constructor(private utils: UtilsService) {
    // console.log("parent cons called")
  }

  ngOnInit() {
    // console.log("parent init called");
  }

  ngOnChanges() {
    // console.log("parent chnages called");
  }

  ngOnDestroy() {
    // console.log("parent destroy called");
  }

  ngAfterViewInit() {
    console.log("parent viewinit called");
  }

  getDataPar(event: Event) {
    this.title = event;
    console.log(event);
  }

  getLoginDetails() {
    let data = this.utils.getLogin();
    console.log(data)
  }

  setLoginDetails() {
    console.log("here")
    this.login = !this.login;
    this.utils.setLogin(this.login)
  }


}
