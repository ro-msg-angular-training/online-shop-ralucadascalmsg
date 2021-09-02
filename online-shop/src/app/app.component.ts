import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './services/product.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-shop';
  constructor(private productService: ProductService,
              public dialog: MatDialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data:{myVar: "MY VAR"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result); 
    });
  }

}

