import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule],
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
    menuOpen = false;

    submit() {
        this.isActive = !this.isActive;
        this.onSumit.emit();
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}
