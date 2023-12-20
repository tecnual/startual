import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../dtos/config.dto';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit{
  // config: Config | null= null;

  @Input() config?: Config;
  ngOnInit() {
  }
}
