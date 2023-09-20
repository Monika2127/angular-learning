import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatCourseComponent } from './mat-course/mat-course.component';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent {

  isChecked = true;
  colors: any[] = [
    { id: 1, color: 'Red' },
    { id: 2, color: 'Green' },
    { id: 3, color: 'Blue' },
  ]
  color = 2;

  minDate = new Date(2023, 0, 1)    //  months start from 0
  maxDate = new Date();

  constructor(public dialog: MatDialog) {
    
  }

  onChange($event: any) {
    console.log("check", $event)
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  openDialog() {
    const reff = this.dialog.open(MatCourseComponent, {
      height: '400px',
      width: '600px',
      data: {name: 'Mona', animal: 'panda'},
    })

    reff.afterClosed().subscribe(res => console.log(res))
  }

}


// COHESION
// things which are related should be kept together
