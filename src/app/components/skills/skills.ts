import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-skills',
    imports: [],
    templateUrl: './skills.html',
    styleUrl: './skills.css'
})
export class Skills {
    @Input() title: string = '';
    @Input() strong: string = '';
}
