import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  changePassword = new FormGroup({
    old: new FormControl(
      '',
      Validators.required,
      this.validPassword
    ),
    new: new FormControl(
      '',
      Validators.required,
    ),
    confirm: new FormControl(
      '',
      Validators.required,
    )
  }, {
    validators: [this.confirmPassword, this.validNewPassword]
  })

  get old() {
    return this.changePassword.get('old')
  }

  get new() {
    return this.changePassword.get('new')
  }

  get confirm() {
    return this.changePassword.get('confirm')
  }

  //  Validators
  validPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value !== '12345')
          resolve({ invalidOld: true })
        else
          resolve(null);
      })
    })
  }

  validNewPassword(control: AbstractControl): ValidationErrors | null {
    let newPwd = control.get('new')
    let oldPwd = control.get('old')

    if(newPwd?.value === oldPwd?.value)
      return { sameAsOld: true }

    return null
  }

  confirmPassword(control: AbstractControl): ValidationErrors | null {
    let newPwd = control.get('new')
    let cnfPwd = control.get('confirm')

    if(newPwd?.value !== cnfPwd?.value)
      return { pwdMatch: true }

    return null;
  }
}
