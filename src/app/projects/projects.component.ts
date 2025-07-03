import { Component } from '@angular/core';
import { Project } from '../_models/project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = [{
    id: 1,
    name: 'Digital Drawing Application',
    description: 'A JavaFX-based paint application built with MVC and Observer patterns, supporting shape drawing, freehand tools, editing features, and image file operations.',
    tags: ['Java', 'JavaFX', 'CSS', 'JUnit'],
    picture: 'assets/expimages/drawing-app.png',
    github: 'https://github.com/sadsalmonnn/Digital-Drawing-Application.git'
  },
  {
    id: 2,
    name: 'Unix Shell & Client-Server Interface',
    description: 'Mysh is a lightweight Unix-like shell written in C, featuring command parsing, built-in commands, piping, and signal handling. It also includes networking capabilities with a client-server chat system.',
    tags: ['C', 'POSIX APIs', 'UNIX sockets', 'Bash'],
    picture: 'assets/expimages/mysh.png',
    github: 'https://github.com/sadsalmonnn/Mysh-Unix-Shell.git'
  },
  {
    id: 3,
    name: 'Hierarchical Treemap Data Visualization',
    description: 'An interactive Python tool that visually represents your file system using a dynamic treemap layout, allowing intuitive exploration, editing, and deletion of files.',
    tags: ['Python', 'OS'],
    picture: 'assets/expimages/treemap.png',
    github: ''
  }
  ];

}
