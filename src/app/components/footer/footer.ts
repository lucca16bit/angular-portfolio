import { Component, Input } from '@angular/core';

@Component({
    selector: 'section-footer',
    imports: [],
    templateUrl: './footer.html',
    styleUrl: './footer.css'
})
export class Footer {
    @Input() footerTitle: string = '';
    @Input() footerSubTitle: string = '';
    @Input() footerIconTitle: string = '';
}
