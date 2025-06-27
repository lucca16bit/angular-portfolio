import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-experience-cards',
    imports: [CommonModule],
    templateUrl: './experience-cards.html',
    styleUrl: './experience-cards.css'
})
export class ExperienceCards {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() imageUrl: string = '';
    @Input() initialDate: string = '';
    @Input() endDate: string = '';
    @Input() noBorder: boolean = false;
    @Input() noBackground: boolean = false;
}
