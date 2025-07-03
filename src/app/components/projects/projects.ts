import { Component, Input } from '@angular/core';
import { ProjectCard } from "../project-card/project-card";

@Component({
    selector: 'projects',
    imports: [ProjectCard],
    templateUrl: './projects.html',
    styleUrl: './projects.css'
})
export class Projects {
    @Input() projectsTitle: string = '';
    @Input() projectStrong: string = '';

    submit() {
        
    }
}
