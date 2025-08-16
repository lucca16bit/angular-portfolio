import { Component } from '@angular/core';

import { AboutMe } from '../../components/about-me/about-me';
import { Contact } from '../../components/contact/contact';
import { Experience } from '../../components/experience/experience';
import { Footer } from '../../components/footer/footer';
import { HeroSection } from '../../components/hero-section/hero-section';
import { Navbar } from '../../components/navbar/navbar';
import { Projects } from '../../components/projects/projects';
import { Skills } from '../../components/skills/skills';

@Component({
    selector: 'app-home',
    imports: [
        Navbar,
        HeroSection,
        Skills,
        Experience,
        AboutMe,
        Projects,
        Footer,
        Contact,
    ],
    templateUrl: './home.html',
})
export class Home {}
