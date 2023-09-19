import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  dessertlist = [
    { id: 1, name: 'icecream' },
    { id: 2, name: 'mithai' },
  ]

  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' }
  ]

  submit(form: { value: any; }) {
    console.log(form.value, form)
  }

  log(val: any) {
    console.log(val)
  }
}
