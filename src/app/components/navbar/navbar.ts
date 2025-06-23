import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-navbar',
    imports: [],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css'
})
export class Navbar {
    @Input() firstTitle: string = '';
    @Input() secondTitle: string = '';
    @Input() thirdTitle: string = '';
    @Input() fourthTitle: string = '';
    @Input() buttonTitle: string = '';
    @Output("submit") onSumit = new EventEmitter();
    isActive = false;

    submit() {
        this.isActive = !this.isActive;
        this.onSumit.emit();
    }
}
