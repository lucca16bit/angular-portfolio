import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { svgIcons } from '../../assets/svg/svgs.icons';

@Injectable({
    providedIn: 'root',
})
export class IconService {
    constructor(private sanitizer: DomSanitizer) {}

    getSocialIcon(
        iconName: string,
        size: number = 24,
        color: string = 'currentColor'
    ): SafeHtml {
        let svgContent = svgIcons[iconName];

        if (!svgContent) {
            return this.sanitizer.bypassSecurityTrustHtml('');
        }

        svgContent = svgContent
            .replace(/width="[^"]*"/, `width="${size}"`)
            .replace(/height="[^"]*"/, `height="${size}"`);

        if (color !== 'currentColor') {
            svgContent = svgContent.replace(/fill="[^"]*"/g, `fill="${color}"`);
        }

        return this.sanitizer.bypassSecurityTrustHtml(svgContent);
    }

    getAllSocialIcons(): string[] {
        return Object.keys(svgIcons);
    }
}
