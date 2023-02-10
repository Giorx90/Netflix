import { Component, Input } from '@angular/core';
import { Films } from './../../models/interfaces';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  @Input()filmsList: Films = {
    section: "", 
    films: []
  } ;

  constructor() {
    
  }

}
