import { Component } from '@angular/core';
import { Project } from '../_models/project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  project1: Project = {
    id: 1,
    name: 'Digital Drawing Application',
    description: 'Built a dynamic drawing application, applying OOP principles and SOLID design patterns to ensure scalability and maintainability. Led Agile sprints with a strong focus on testing through JUnit, improving code accuracy, performance, and delivery speed while exceeding 120% of project milestones. Collaborated cross-functionally to integrate front-end and back-end components, optimizing UI responsiveness and application performance through continuous feedback and refinement.',
    tags: ['Java', 'JavaFX', 'CSS', 'JUnit']
  }

  project2: Project = {
    id: 2,
    name: 'Unix Shell & Client-Server Interface',
    description: 'Developed a modular Unix shell in C with robust input tokenization, dynamic environment variable expansion, and built-in command execution, emphasizing memory safety and scalability. Utilized POSIX-compliant system calls and process control mechanisms to support execution of built-in and external commands, including background processing and comprehensive error handling. Implemented socket-based communication for reliable client-server interactions with a Makefile for automated builds and streamlined development.',
    tags: ['C', 'POSIX APIs', 'UNIX sockets', 'Bash']
  }

  project3: Project = {
    id: 3,
    name: 'Hierarchical Treemap Data Visualization',
    description: 'Implemented efficient tree-based data structures to represent hierarchical datasets and designed a recursive treemap algorithm for dynamic, geometric visualization of complex data.Developed an interactive file system visualization tool using Python’s OS module and object-oriented programming, enabling intuitive exploration and management of diverse data types.',
    tags: ['Python', 'OS']
  }

}
