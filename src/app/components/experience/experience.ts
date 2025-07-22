import { Component, Input } from '@angular/core';
import { ExperienceCards } from "../experience-cards/experience-cards";

@Component({
    selector: 'experience',
    imports: [ExperienceCards],
    templateUrl: './experience.html'
})
export class Experience {
    @Input() title: string = '';
    @Input() strong: string = '';
}
