import { Component, Input } from '@angular/core';

@Component({
    selector: 'about-me',
    imports: [],
    templateUrl: './about-me.html',
    styleUrl: './about-me.css'
})
export class AboutMe {
    @Input() aboutTitle: string = '';
    @Input() aboutStrong: string = '';
    @Input() aboutImageUrl: string = '';
    @Input() firstParagraph: string = '';
    @Input() secondParagraph: string = '';
    @Input() thirdParagraph: string = '';
}
