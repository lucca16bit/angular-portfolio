import { Component, Input } from '@angular/core';

import { Svg } from '../svg/svg';

@Component({
    selector: 'skills',
    imports: [Svg],
    templateUrl: './skills.html',
    styleUrl: './skills.css'
})
export class Skills {
    @Input() title: string = '';
    @Input() strong: string = '';
}
