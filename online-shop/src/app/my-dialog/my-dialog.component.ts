import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
  }
  
  no(){
    this.dialogRef.close("Have a good day")
  } 

  yes(){
    this.dialogRef.close("Login to see our products")
  } 
}
