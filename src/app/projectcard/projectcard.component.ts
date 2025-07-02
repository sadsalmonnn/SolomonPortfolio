import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Project } from '../_models/project';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectcardComponent {
  @Input() project = {} as Project;
}
