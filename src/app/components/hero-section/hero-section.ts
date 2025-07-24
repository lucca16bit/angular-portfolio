import { Component, Input } from '@angular/core';
import { Svg } from "../svg/svg";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'hero-section',
    templateUrl: './hero-section.html',
    styleUrl: './hero-section.css',
    imports: [Svg, TranslateModule]
})
export class HeroSection {

}
