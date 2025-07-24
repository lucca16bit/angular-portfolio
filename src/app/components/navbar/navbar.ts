import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { Svg } from '../svg/svg';

@Component({
    selector: 'navbar',
    imports: [CommonModule, Svg, TranslateModule],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css'
})
export class Navbar {
    @Output("submit") onSumit = new EventEmitter();
    lastScrollPosition: number = 0;
    rotateChevron: boolean = false;
    showLangList: boolean = false;
    menuOpen: boolean = false;
    isHidden: boolean = false;

    constructor(private translate: TranslateService) {}

    submit() {
        this.onSumit.emit();
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    changeLang(lang: string) {
        this.translate.use(lang);
        this.showLangList = false;
        this.rotateChevron = false;
    }

    toggleLangList() {
        this.showLangList = !this.showLangList;
        this.rotateChevron = !this.rotateChevron;
    }

    @HostListener('window:scroll', [])
    handleWindowScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollPosition > this.lastScrollPosition) {
            this.showLangList = false;
            this.rotateChevron = false;
            this.isHidden = true;
        } else {
            this.isHidden = false;
        }
        this.lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
    }

    scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        this.menuOpen = false;
    }
}
