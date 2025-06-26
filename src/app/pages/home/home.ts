import { Component } from '@angular/core';

import { HeroSection } from '../../components/hero-section/hero-section';
import { Navbar } from '../../components/navbar/navbar';
import { Skills } from '../../components/skills/skills';

@Component({
  selector: 'app-home',
  imports: [Navbar, HeroSection, Skills],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
