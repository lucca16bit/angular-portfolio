import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { Skill } from '../../interfaces/skill.interface';
import { Svg } from '../svg/svg';

@Component({
	selector: 'skills',
	imports: [Svg, TranslateModule, CommonModule],
	templateUrl: './skills.html',
})
export class Skills {
	svgSize: number = 50;

	constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			this.updateSvgSize();
		}
	}

	skills: Skill[] = [
		{ icon: 'angular', title: 'Angular' },
		{ icon: 'java', title: 'Java' },
		{ icon: 'spring', title: 'Spring Boot' },
		{ icon: 'typescript', title: 'Typescript' },
		{ icon: 'nodejs', title: 'Node.js' },
		{ icon: 'express', title: 'Express' },
		{ icon: 'sass', title: 'Sass/Scss' },
		{ icon: 'tailwind', title: 'TailwindCSS' },
		{ icon: 'mysql', title: 'MySQL' },
		{ icon: 'postgresql', title: 'PostgreSQL' },
		{ icon: 'docker', title: 'Docker' },
		{ icon: 'aws', title: 'AWS' },
		{ icon: 'oci', title: 'OCI' },
		{ icon: 'git', title: 'git' },
		{ icon: 'powershell', title: 'Powershell' },
		{ icon: 'bash', title: 'Bash' },
	];

	@HostListener('window:resize')
	onResize() {
		this.updateSvgSize();
	}

	updateSvgSize() {
		this.svgSize = window.innerWidth >= 768 ? 70 : 50;
	}
}
