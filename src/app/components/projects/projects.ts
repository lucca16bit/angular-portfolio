import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ProjectCard } from '../project-card/project-card';

@Component({
    selector: 'projects',
    imports: [ProjectCard, CommonModule],
    templateUrl: './projects.html'
})
export class Projects {
    @Input() projectsTitle: string = '';
    @Input() projectStrong: string = '';
    visibleProjects: number = 4;

    projectsList = [
        {
            projectTitle: "todo.it",
            projectImageUrl: "assets/img/projects/todo.it-logo.png",
            projectDescription: "todo.it é uma aplicação web desenvolvida com Angular e Tailwind para gerenciamento de tarefas. A interface permite adicionar, editar, marcar tarefas como concluídas e remover tarefas, além de filtrar tarefas por prioriedade (Low, Medium, High) de forma simples e intuitiva. A aplicação tambbém conta com autenticação de usuários via JWT, garantindo que o usuário gerencie suas tarefas de forma segura",
            demo: "https://todoit-simply.vercel.app/",
            repository: "https://github.com/lucca16bit/angular-todo.it",
            techs: [
                {name: 'Angular', icon: 'miniAngular'},
                {name: 'Typescript', icon: 'miniTypescript'},
                {name: 'TailwindCSS', icon: 'miniTailwind'},
            ]
        },
        {
            projectTitle: "API Rest - todo.it",
            projectImageUrl: "assets/img/projects/todo.it-api-endpoints.png",
            projectDescription: "Este projeto é uma API REST desenvolvida para o projeto todo.it. A aplicação oferece autenticação segura com JWT, garantindo que cada  usuário gerencie suas tarefas de forma segura. Utiliza banco de dados MySQL com versionamento de migrations por Flyway. Conta com documentação interativa via Swagger, seguindo boas práticas de arquitetura, organização de camadas e tratamento de erros.",
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
            projectTitle: "API Rest - Star Wars",
            projectImageUrl: "assets/img/projects/star-wars-api-endpoints.jpg",
            projectDescription: "API Rest desenvolvida com Node.js, TypeScript e Express, focada no gerenciamento de dados do universo Star Wars, como personagens, naves, planetas e sistemas estelares. Conta com autenticação de usuários via JWT, banco de dados MySQL com Prisma para o mapeamento e migrations, e documentação com Swagger. A aplicação segue boas práticas de organização em camadas, tratamento de erros e segurança, oferecendo endpoints protegidos e operações CRUD para cada entidade.",
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
            projectTitle: "Notes",
            projectImageUrl: "assets/img/projects/notes-logo.png",
            projectDescription: "Aplicativo web criado com React e Tailwind, permitindo registrar notas em texto ou por áudio convertido automaticamente em texto via SpeechRecognition API. O projeto usa componentes acessíveis do Radix UI, ícones do Lucide e notificações com Sonner. As notas são armazenadas localmente no navegador. É uma aplicação leve, moderna e prática, que reforça seu conhecimento em React, Tailwind e consumo de APIs externas",
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
