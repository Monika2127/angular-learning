import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './custom.validators';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  constructor() {

  }

  // First parameter of FormControl always take a string which is null or some default __values, then a validator func-
  // -tion/array(returns ValidationErrors or null), then a asyncValidator function/array(returns promise or observable 
  //   having ValidationErrors or null as a returntype) 

  myForm = new FormGroup({
    username: new FormControl(
      'mona',                   //  empty string for initial value
      Validators.required,      //  static Validators class having the validator function, it can contain validator func or array of validator func 
      CustomValidator.hasUniqueName
    ),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        CustomValidator.cannotHaveSpace
      ])
  })

  nestedForm = new FormGroup({
    account: new FormGroup({
      user: new FormControl(
        'mona',                   //  empty string for initial value
        Validators.required,      //  static Validators class having the validator function, it can contain validator func or array of validator func 
        CustomValidator.hasUniqueName
      ),
      pwd: new FormControl('',
        [
          Validators.required,
          Validators.minLength(3),
          CustomValidator.cannotHaveSpace
        ])
    }),
    age: new FormControl(
      '',
      Validators.required
    )
  })

  get userName() {
    return this.myForm.get('username');
  }

  get passWord() {
    return this.myForm.get('password');
  }

  get user() {
    return this.nestedForm.get('account.user')
  }

  get pwd() {
    return this.nestedForm.get('account.pwd')
  }

  get age() {
    return this.nestedForm.get('age')
  }

  // Apply validation on submitting the form, from the server side

  login() {
    // Get the validation from the server, kind of like this
    // let isValid = authService.login(this.myForm.value);
    // console.log(this.myForm)
    console.log(this.nestedForm)
    this.myForm.setErrors({
      // invalidLogin: isValid,       
      invalidLogin: true
    })
  }

}
