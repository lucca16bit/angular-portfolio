import { Component, Input } from '@angular/core';

@Component({
    selector: 'section-footer',
    imports: [],
    templateUrl: './footer.html'
})
export class Footer {
    @Input() footerTitle: string = '';
    @Input() footerSubTitle: string = '';
    @Input() footerIconTitle: string = '';
    menuOpen = false;

    scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        this.menuOpen = false;
    }
}
