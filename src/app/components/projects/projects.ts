import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { Project } from '../../interfaces/project.interface';
import { ProjectCard } from '../project-card/project-card';

@Component({
    selector: 'projects',
    imports: [ProjectCard, CommonModule, TranslateModule],
    templateUrl: './projects.html',
})
export class Projects {
    visibleProjects: number = 4;

    projectsList: Project[] = [
        {
            title: 'projects.project-card.first-project-card.title',
            imageUrl: 'assets/img/projects/preview-todoit-mobile.png',
            description: 'projects.project-card.first-project-card.description',
            modalDescription:
                'projects.project-card.first-project-card.modal.description',
            techsUsed: 'projects.project-card.first-project-card.modal.techs',
            demo: 'https://todoit-simply.vercel.app/',
            repository: 'https://github.com/todo-it-repository',
            techs: [
                { name: 'Angular', icon: 'miniAngular' },
                { name: 'Typescript', icon: 'miniTypescript' },
                { name: 'TailwindCSS', icon: 'miniTailwind' },
                { name: 'Java', icon: 'miniJava' },
                { name: 'Spring Boot', icon: 'miniSpring' },
                { name: 'PostgreSQL', icon: 'miniPostgresql' },
                { name: 'Flyway', icon: 'miniFlyway' },
                { name: 'Swagger', icon: 'miniSwagger' },
            ],
        },
        {
            title: 'projects.project-card.second-project-card.title',
            imageUrl: 'assets/img/projects/preview-agents-live.png',
            description:
                'projects.project-card.second-project-card.description',
            modalDescription:
                'projects.project-card.second-project-card.modal.description',
            techsUsed: 'projects.project-card.second-project-card.modal.techs',
            demo: 'https://agents-livestream.vercel.app/',
            repository: 'https://github.com/lucca16bit/node-agents-livestream',
            techs: [
                { name: 'React', icon: 'miniReact' },
                { name: 'TailwindCSS', icon: 'miniTailwind' },
                { name: 'Typescript', icon: 'miniTypescript' },
                { name: 'Node.js', icon: 'miniNodejs' },
                { name: 'Fastify', icon: 'miniFastify' },
                { name: 'Gemini', icon: 'miniGemini' },
                { name: 'PostgreSQL', icon: 'miniPostgresql' },
                { name: 'Prisma', icon: 'miniPrisma' },
            ],
        },
        {
            title: 'projects.project-card.third-project-card.title',
            imageUrl: 'assets/img/projects/preview-endpoints-star-wars.png',
            description: 'projects.project-card.third-project-card.description',
            modalDescription:
                'projects.project-card.third-project-card.modal.description',
            techsUsed: 'projects.project-card.third-project-card.modal.techs',
            demo: 'https://express-star-wars-api.onrender.com/',
            repository:
                'https://github.com/lucca16bit/express-desafio-backend-fusion',
            techs: [
                { name: 'Node.js', icon: 'miniNodejs' },
                { name: 'Typescript', icon: 'miniTypescript' },
                { name: 'Express', icon: 'miniExpress' },
                { name: 'Prisma', icon: 'miniPrisma' },
                { name: 'Swagger', icon: 'miniSwagger' },
            ],
        },
        {
            title: 'projects.project-card.fourth-project-card.title',
            imageUrl: 'assets/img/projects/preview-endpoints-api-med.png',
            description:
                'projects.project-card.fourth-project-card.description',
            modalDescription:
                'projects.project-card.fourth-project-card.modal.description',
            techsUsed: 'projects.project-card.fourth-project-card.modal.techs',
            demo: '',
            repository: 'https://github.com/lucca16bit/spring-boot-med-voll',
            techs: [
                { name: 'Java', icon: 'miniJava' },
                { name: 'Spring Boot', icon: 'miniSpring' },
                { name: 'PosgreSQL', icon: 'miniPostgresql' },
                { name: 'Flyway', icon: 'miniFlyway' },
                { name: 'Swagger', icon: 'miniSwagger' },
            ],
        },
    ];

    submit() {
        this.visibleProjects += 2;
    }
}
