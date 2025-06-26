import { Component, Input } from '@angular/core';
import { Svg } from "../svg/svg";

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.html',
    styleUrl: './hero-section.css',
    imports: [Svg]
})
export class HeroSection {
    @Input() greeting: string = '';
    @Input() userName: string = '';
    @Input() areaTitle: string = '';
    @Input() outlinedRole: string = '';
    @Input() based: string = '';
    @Input() country: string = '';
    @Input() description: string = '';
}
