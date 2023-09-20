import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-course',
  templateUrl: './mat-course.component.html',
  styleUrls: ['./mat-course.component.scss']
})
export class MatCourseComponent {
  
  constructor(
    public dialogRef: MatDialogRef<MatCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string, animal: string
  }) { }

  onNoClick() {
    this.dialogRef.close();
  }

}
