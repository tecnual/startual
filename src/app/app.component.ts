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
  configu: Config =
  {
    title: "Tecnual",
    display: "line_style",
    sections: [
      {
        name: "Aplicaciones 1",
        type: "section",
        icon: "apps",
        order: 0,
        items: [
          {
            name: "HA",
            description: "",
            url: "",
          },
          {
            name: "Pihole",
            description: "",
            url: "",
          },
        ]
      },
      {
        name: "Ideas",
        type: "section",
        icon: "lightbulb",
        order: 4,
        items: [
          {
            name: "idea 1",
            description: "",
            url: "",
          },
          {
            name: "Idea 2",
            description: "",
            url: "",
          },
          {
            name: "Idea 3",
            description: "",
            url: "",
          },
          {
            name: "Idea 4",
            description: "",
            url: "",
          }
        ]
      },
      {
        name: "Aplicaciones 2",
        type: "section",
        icon: "apps",
        order: 2,
        items: [
          {
            name: "HA",
            description: "",
            url: "",
          },
          {
            name: "Aplicaciones",
            description: "",
            url: "",
          },
        ]
      },
      {
        name: "Aplicaciones 3",
        type: "section",
        icon: "apps",
        order: 3,
        items: [
          {
            name: "HA",
            description: "",
            url: "",
          },
          {
            name: "Aplicaciones",
            description: "",
            url: "",
          },
        ]
      },
      {
        name: "Ideas 2",
        type: "section",
        icon: "lightbulb",
        order: 1,
        items: [
          {
            name: "idea 1",
            description: "",
            url: "",
          },
          {
            name: "Idea 2",
            description: "",
            url: "",
          },
          {
            name: "Idea 3",
            description: "",
            url: "",
          },
          {
            name: "Idea 4",
            description: "",
            url: "",
          }
        ]
      }
    ]
  };
  opened: boolean | null = true;

  ngOnInit() {
    console.log("Inicio...");
    localStorage.setItem('config', JSON.stringify(this.config));
    this.readLocalStorage();
  }

  readLocalStorage() {
    let configuracion = localStorage.getItem('config' );
    configuracion ? this.config = JSON.parse(configuracion): null;
    // console.log("Configuracion", this.config);
  }

  saveConfig(){
    console.log('Guardamos la configuración');
  }

  toggleView() {
    this.config.display = this.config?.display === "line_style"? "view_column": "line_style"
    localStorage.setItem('config', JSON.stringify(this.config));
    console.log("afterToogle", this.config);
  }
}
