import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'experience-cards',
    imports: [CommonModule],
    templateUrl: './experience-cards.html'
})
export class ExperienceCards {
    @Input() title: string = '';
    @Input() subTitle: string = '';
    @Input() description: string = '';
    @Input() imageUrl: string = '';
    @Input() initialDate: string = '';
    @Input() endDate: string = '';
    @Input() noBorder: boolean = false;
    @Input() noBackground: boolean = false;
}
