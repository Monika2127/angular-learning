import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent {

  // when you want to create an array of objects in a form, we use FormArray class

  myForm = new FormGroup({
    topics: new FormArray([])
  })


  //  FOR  FORM  ARRAY

  //  as topics is a formArray so we have to define it like this
  get topics() {
    return this.myForm.get('topics') as FormArray;
  }

  // topic is a template variable, which refers to that htmlinput element, that's why we have to explicitly set its annotations
  addTopic(topic: HTMLInputElement) {
    // for every new input field, it's a kind of form-control where we have topic.value as value, we can also pass FormGroup here for 
    // complex objects
    this.topics.push(new FormControl(topic.value))
    topic.value = '';
  }


  //  this top is of Form control type as topics contain array of form control object
  removeTopic(top: AbstractControl) {
    let index = this.topics.controls.indexOf(top);
    this.topics.removeAt(index);
  }



  //  FORM  BUILDER  OBJECT

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    topics: new FormArray([]),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    })
  })

  // in order to use simpler way, we can use FormBuilder class and inject it in the constructor

  formG: any;
  constructor(fb: FormBuilder) {
    this.formG = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],              //   [], denotes the FormControl Class, where we can pass array of parameters same as that of previous one
        phone: []
      }),
      topics: fb.array([])
    })
  }

}
