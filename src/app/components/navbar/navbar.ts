import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
    lastScrollPosition = 0;
    menuOpen = false;
    isHidden = false;

    submit() {
        this.onSumit.emit();
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    @HostListener('window:scroll', [])
    handleWindowScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollPosition > this.lastScrollPosition) {
            this.isHidden = true;
        } else {
            this.isHidden = false;
        }
        this.lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
    }
}
