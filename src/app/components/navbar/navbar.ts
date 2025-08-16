import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { Svg } from '../svg/svg';

@Component({
    selector: 'navbar',
    imports: [CommonModule, Svg, TranslateModule],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
    animations: [
        trigger('show', [
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateY(-10px) scale(0.95)',
                }),
                animate(
                    '200ms ease-out',
                    style({
                        opacity: 1,
                        transform: 'translateY(0) scale(1)',
                    })
                ),
            ]),
            transition(':leave', [
                animate(
                    '150ms ease-in',
                    style({
                        opacity: 0,
                        transform: 'translateY(-8px) scale(0.98)',
                    })
                ),
            ]),
        ]),
    ],
})
export class Navbar {
    @Output('submit') onSumit = new EventEmitter();
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
        this.rotateChevron = false;
        this.showLangList = false;
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
        const scrollPosition =
            window.pageYOffset || document.documentElement.scrollTop;

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
