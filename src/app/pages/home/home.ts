import { Component } from '@angular/core';

import { AboutMe } from '../../components/about-me/about-me';
import { Experience } from '../../components/experience/experience';
import { HeroSection } from '../../components/hero-section/hero-section';
import { Navbar } from '../../components/navbar/navbar';
import { Projects } from '../../components/projects/projects';
import { Skills } from '../../components/skills/skills';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, HeroSection, Skills, Experience, AboutMe, Projects, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
