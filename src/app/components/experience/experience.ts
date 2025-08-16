import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ExperienceCards } from '../experience-cards/experience-cards';

@Component({
    selector: 'experience',
    imports: [ExperienceCards, TranslateModule],
    templateUrl: './experience.html',
})
export class Experience {}
