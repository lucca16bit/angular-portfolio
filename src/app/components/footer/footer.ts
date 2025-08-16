import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'section-footer',
    imports: [TranslateModule],
    templateUrl: './footer.html',
})
export class Footer {
    menuOpen = false;

    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        this.menuOpen = false;
    }
}
