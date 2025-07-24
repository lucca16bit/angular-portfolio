import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'about-me',
    imports: [TranslateModule],
    templateUrl: './about-me.html'
})
export class AboutMe {
    @Input() aboutImageUrl: string = '';
}
