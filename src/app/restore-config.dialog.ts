import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
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
  imports: [CommonModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})

export class RestoreConfigDialog {
  constructor(public dialogRef: MatDialogRef<RestoreConfigDialog>) {}
  file: any;
  filename: string | null = null;
  config:Config | null= null;
  valid:boolean = false;
  fileChanged(e: any) {
    this.file = e.target.files[0];
    this.uploadDocument(this.file);
  }

  uploadDocument(file: any) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log('salida... ', e);
      const result = fileReader.result?.toString();

      //this.config = JSON.parse(fileReader.result?.toString());
      try {
      this.config = JSON.parse(result!);
      this.filename = this.file.name
      this.valid = true;
      } catch(e) {
        console.log('fichero no valido');
        this.valid = false;
      }
      console.log("Configuracion encontrada...", this.config);
    }
    fileReader.readAsText(this.file);

  }
  restoreConfig(){
    console.log('Restaurando...');
    this.dialogRef.close({event:'save', data:this.config});
  }
}
