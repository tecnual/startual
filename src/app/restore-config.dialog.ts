import {Component} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Config } from './dtos/config.dto';

@Component({
  selector: 'restore-config-dialog',
  templateUrl: 'restore-config.dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})

export class RestoreConfigDialog {
  constructor(public dialogRef: MatDialogRef<RestoreConfigDialog>) {}
  file:any;
  config:Config | null= null;

  fileChanged(e: any) {
    this.file = e.target.files[0];
    this.uploadDocument(this.file);
  }

  uploadDocument(file: any) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const result = fileReader.result?.toString();
      //this.config = JSON.parse(fileReader.result?.toString());
      this.config = JSON.parse(result!);
      console.log("Configuracion restaurada...", this.config);
    }
    fileReader.readAsText(this.file);

  }
  restoreConfig(){
    console.log('Restaurando...');
    this.dialogRef.close({event:'save', data:this.config});
  }
}
