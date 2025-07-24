import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ProjectCard } from '../project-card/project-card';

@Component({
    selector: 'projects',
    imports: [ProjectCard, CommonModule, TranslateModule],
    templateUrl: './projects.html'
})
export class Projects {
    visibleProjects: number = 4;

    projectsList = [
        {
            title: "projects.project-card.first-project-card.title",
            imageUrl: "assets/img/projects/todo.it-logo.png",
            description: "projects.project-card.first-project-card.description",
            demo: "https://todoit-simply.vercel.app/",
            repository: "https://github.com/lucca16bit/angular-todo.it",
            techs: [
                {name: 'Angular', icon: 'miniAngular'},
                {name: 'Typescript', icon: 'miniTypescript'},
                {name: 'TailwindCSS', icon: 'miniTailwind'},
            ]
        },
        {
            title: "projects.project-card.second-project-card.title",
            imageUrl: "assets/img/projects/todo.it-api-endpoints.png",
            description: "projects.project-card.second-project-card.description",
            demo: "https://java-todolist-production.up.railway.app/",
            repository: "https://github.com/lucca16bit/java-todo.it",
            techs: [
                {name: 'Java', icon: 'miniJava'},
                {name: 'Spring Boot', icon: 'miniSpring'},
                {name: 'MySQL', icon: 'miniMysql'},
                {name: 'Flyway', icon: 'miniFlyway'},
                {name: 'Swagger', icon: 'miniSwagger'}
            ]
        },
        {
            title: "projects.project-card.third-project-card.title",
            imageUrl: "assets/img/projects/star-wars-api-endpoints.jpg",
            description: "projects.project-card.third-project-card.description",
            demo: "https://express-star-wars-api.onrender.com/",
            repository: "https://github.com/lucca16bit/express-desafio-backend-fusion",
            techs: [
                {name: 'Node.js', icon: 'miniNodejs'},
                {name: 'Typescript', icon: 'miniTypescript'},
                {name: 'Express', icon: 'miniExpress'},
                {name: 'Prisma', icon: 'miniPrisma'},
                {name: 'Swagger', icon: 'miniSwagger'}
            ]
        },
        {
            title: "projects.project-card.fourth-project-card.title",
            imageUrl: "assets/img/projects/notes-logo.png",
            description: "projects.project-card.fourth-project-card.description",
            demo: "https://reactjs-notes-ten.vercel.app/",
            repository: "https://github.com/lucca16bit/react-app-notes",
            techs: [
                {name: 'React', icon: 'miniReact'},
                {name: 'Typescript', icon: 'miniTypescript'},
                {name: 'TailwindCSS', icon: 'miniTailwind'},
                {name: 'Radix UI', icon: 'miniRadix'},
            ]
        },

    ]

    submit() {
        this.visibleProjects += 2;
    }
}
