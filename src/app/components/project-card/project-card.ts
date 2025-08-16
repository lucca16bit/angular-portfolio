import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { Techs } from '../../interfaces/techs.interface';
import { Modal } from '../modal/modal';
import { Svg } from '../svg/svg';

@Component({
    selector: 'project-card',
    imports: [Svg, CommonModule, TranslateModule, Modal],
    templateUrl: './project-card.html',
})
export class ProjectCard {
    @Input() title: string = '';
    @Input() imageUrl: string = '';
    @Input() description: string = '';
    @Input() modalDescription: string = '';
    @Input() techsUsed: string = '';
    @Input() techs: Techs[] = [];

    @Input() demoTitle: string = 'Demo';
    @Input() apiTitle: string = 'API';
    @Input() repoTitle: string = 'Repository';

    @Input() demo: string = '';
    @Input() api: string = '';
    @Input() repository: string = '';

    showModal: boolean = false;

    openModal(): void {
        this.showModal = true;
    }

    closeModal(): void {
        this.showModal = false;
    }

    get hasDemo(): boolean {
        return !!this.demo && this.demo.trim() !== '';
    }

    get hasRepository(): boolean {
        return !!this.repository && this.repository.trim() !== '';
    }

    get hasApi(): boolean {
        return !!this.api && this.api.trim() !== '';
    }
}
