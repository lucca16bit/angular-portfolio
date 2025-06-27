import { Component, Input } from '@angular/core';
import { ExperienceCards } from "../experience-cards/experience-cards";

@Component({
    selector: 'app-experience',
    imports: [ExperienceCards],
    templateUrl: './experience.html',
    styleUrl: './experience.css'
})
export class Experience {
    @Input() title: string = '';
    @Input() strong: string = '';
}
