import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { svgIcons } from '../../../assets/svg/svgs.icons';

@Component({
    selector: 'app-svg',
    imports: [],
    templateUrl: './svg.html'
})
export class Svg {
    @Input() icon!: string;
    @Input() size: number = 24;
    @Input() customClass: string = '';
    @Input() color: string = 'currentColor';

    constructor(private sanitizer: DomSanitizer) {}

    get iconHtml(): SafeHtml {
        let svgContent = svgIcons[this.icon] || '';

        if (this.color !== 'currentColor') {
            svgContent = svgContent.replace(/fill="[^"]*"/g, `fill="${this.color}"`);
        }

        svgContent = svgContent.replace(/width="[^"]*"/, `width="${this.size}"`);
        svgContent = svgContent.replace(/height="[^"]*"/, `height="${this.size}"`);

        return this.sanitizer.bypassSecurityTrustHtml(svgContent);
    }
}
