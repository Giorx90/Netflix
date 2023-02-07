import { Component } from '@angular/core';
import { actionFilms } from './models/films';
import { animeFilms } from './models/films';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  actionFilmsMain = actionFilms;
  animeFilmsMain = animeFilms;

}
