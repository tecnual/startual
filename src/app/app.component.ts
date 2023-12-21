import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Config, Section } from './dtos/config.dto';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ContentComponent } from './core/content/content.component';
import defaultConfig from '../assets/default-config.json'

import {
  MatDialog
} from '@angular/material/dialog';
import { RestoreConfigDialog } from './restore-config.dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    ContentComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  config: Config = defaultConfig;
  opened: boolean | null = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    console.log("Inicio...");
    localStorage.setItem('config', JSON.stringify(this.config));
    this.readLocalStorage();
  }

  readLocalStorage() {
    let configuracion = localStorage.getItem('config');
    configuracion ? this.config = JSON.parse(configuracion) : null;
  }

  saveConfig() {
    console.log('Guardamos la configuración');
    let filename = 'startual-config.json'
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(JSON.stringify(this.config)));
    a.setAttribute('download', filename);
    a.click()
  }

  restoreConfig() {
    console.log('Recuperamos la configuración');
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RestoreConfigDialog,{
      panelClass: 'restore-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed...', result);
      if (result?.event === 'save') {
        this.config = result.data;
        localStorage.setItem('config', JSON.stringify(this.config));
      }
    });
  }

  toggleView() {
    this.config.display = this.config?.display === "line_style" ? "view_column" : "line_style"
    localStorage.setItem('config', JSON.stringify(this.config));
    console.log("afterToogle", this.config);
  }
}
