import { Component, Input } from '@angular/core';
import { Films } from './../../models/interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  
  @Input()filmsList: Films = {
    section: "", 
    films: {
      title: "",
      image: {
        src: "",
        alt: ""
      }
    }
  };

  constructor() {
    
  }

}
