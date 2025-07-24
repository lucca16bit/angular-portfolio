import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { Svg } from '../svg/svg';

@Component({
    selector: 'skills',
    imports: [Svg, TranslateModule],
    templateUrl: './skills.html'
})
export class Skills {

}
