import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { Svg } from '../svg/svg';

@Component({
    selector: 'project-card',
    imports: [Svg, CommonModule, TranslateModule],
    templateUrl: './project-card.html'
})
export class ProjectCard {
    @Input() title: string = '';
    @Input() imageUrl: string = '';
    @Input() description: string = '';
    @Input() techs: { name: string; icon: string }[] = [];
    @Input() demoTitle: string = '';
    @Input() repoTitle: string = '';
    @Input() demo: string = '';
    @Input() repository: string = '';
}
