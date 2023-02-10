import { Component } from '@angular/core';
import { actionFilms, animeFilms, top10Films } from './models/films';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  actionFilmsMain = actionFilms;
  animeFilmsMain = animeFilms;
  top10FilmsMain = top10Films

}
