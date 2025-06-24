import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { HeroSection } from "../../components/hero-section/hero-section";

@Component({
  selector: 'app-home',
  imports: [Navbar, HeroSection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
