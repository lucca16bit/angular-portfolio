import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { Skill } from '../../interfaces/skill.interface';
import { Svg } from '../svg/svg';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'skills',
    imports: [Svg, TranslateModule, CommonModule],
    templateUrl: './skills.html'
})

export class Skills {
    svgSize: number = 50;

    skills: Skill[] = [
        { icon: 'java', title: 'Java' },
        { icon: 'spring', title: 'Spring Boot' },
        { icon: 'nodejs', title: 'Node.js' },
        { icon: 'express', title: 'Express' },
        { icon: 'angular', title: 'Angular' },
        { icon: 'react', title: 'React' },
        { icon: 'html5', title: 'HTML5' },
        { icon: 'css3', title: 'CSS3' },
        { icon: 'typescript', title: 'Typescript' },
        { icon: 'javascript', title: 'Javascript' },
        { icon: 'sass', title: 'Sass/Scss' },
        { icon: 'tailwind', title: 'TailwindCSS' },
        { icon: 'mysql', title: 'MySQL' },
        { icon: 'postgresql', title: 'PostgreSQL' },
        { icon: 'docker', title: 'Docker' },
        { icon: 'aws', title: 'AWS' },
        { icon: 'oci', title: 'OCI' },
        { icon: 'git', title: 'git' },
        { icon: 'powershell', title: 'Powershell' },
        { icon: 'bash', title: 'Bash' },
        { icon: 'postman', title: 'Postman' },
        { icon: 'swagger', title: 'Swagger' },
        { icon: 'maven', title: 'Maven' },
        { icon: 'gradle', title: 'Gradle' },
        { icon: 'npm', title: 'npm' }
    ];

    @HostListener('window:resize')
    onResize() {
        this.updateSvgSize();
    }

    ngOnInit() {
        this.updateSvgSize();
    }

    updateSvgSize() {
        this.svgSize = window.innerWidth >= 768 ? 70 : 50;
    }
}
