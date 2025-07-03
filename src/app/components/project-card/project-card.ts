import { Component, Input } from '@angular/core';

import { Svg } from '../svg/svg';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'project-card',
    imports: [Svg, CommonModule],
    templateUrl: './project-card.html'
})
export class ProjectCard {
    @Input() projectTitle: string = '';
    @Input() projectImageUrl: string = '';
    @Input() projectDescription: string = '';
    @Input() techs: { name: string; icon: string }[] = [];
    @Input() demo: string = '';
    @Input() repository: string = '';
}
