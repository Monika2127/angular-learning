import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 3 controls', () => {
    expect(component.form.contains('name')).toBe(true);
    expect(component.form.contains('email')).toBeTruthy;
    expect(component.form.contains('age')).toBeTruthy;
  });

  it('should make the name field required', () => {
    let control = component.form.get('name');

    control?.setValue('');

    expect(control?.valid).toBeFalsy();
  });

  it('should make the email field required', () => {
    let control = component.form.get('email');

    control?.setValue('abc@gmail.com');

    expect(control?.valid).toBeTruthy();
  });

});


// in the forms, we have test as the form control field should be there in template and it is properly validated if has validations

