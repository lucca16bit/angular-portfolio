import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hero-section',
    imports: [],
    templateUrl: './hero-section.html',
    styleUrl: './hero-section.css'
})
export class HeroSection {
    @Input() greeting: string = '';
    @Input() userName: string = '';
    @Input() areaTitle: string = '';
    @Input() outlinedRole: string = '';
    @Input() based: string = '';
    @Input() country: string = '';
    @Input() description: string = '';
    linkedinActive = false;
    twitterActive = false;
    instagramActive = false;
    discordActive = false;
}
