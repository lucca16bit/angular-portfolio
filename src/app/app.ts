import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html'
})
export class App {
    constructor(private translate: TranslateService) {
        this.translate.addLangs(['pt', 'en']);
        this.translate.setDefaultLang('pt');
        this.translate.use('pt');
    }
}
