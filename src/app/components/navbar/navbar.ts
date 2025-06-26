import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Svg } from "../svg/svg";

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, Svg],
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
    menuOpen = false;

    submit() {
        this.onSumit.emit();
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}
