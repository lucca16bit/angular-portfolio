import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'experience-cards',
    imports: [CommonModule, TranslateModule],
    templateUrl: './experience-cards.html',
})
export class ExperienceCards {
    @Input() title: string = '';
    @Input() subTitle: string = '';
    @Input() description: string = '';
    @Input() initialDate: string = '';
    @Input() endDate: string = '';
    @Input() imageUrl: string = '';
    @Input() noBorder: boolean = false;
    @Input() noBackground: boolean = false;
}
