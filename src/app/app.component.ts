import { Component, OnInit } from '@angular/core';
import { Card } from '../atom/card/card';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent implements OnInit {

  cards: Card[]

  ngOnInit(): void {
      this.cards = [{
        img: "src/visuel-home-desktop.png",
        title: "2,3 millions",
        content: `C'est le nombre de personnes
        qui se retrouvent chaque mois
        sur PAP.fr pour vendre, acheter ou louer leur logement.`
      }, {
        img: "src/visuel-home-desktop.png",
        title: "2,3 millions",
        content: `C'est le nombre de personnes
        qui se retrouvent chaque mois
        sur PAP.fr pour vendre, acheter ou louer leur logement.`
      }, {
        img: "src/visuel-home-desktop.png",
        title: "2,3 millions",
        content: `C'est le nombre de personnes
        qui se retrouvent chaque mois
        sur PAP.fr pour vendre, acheter ou louer leur logement.`
      }, {
        img: "src/visuel-home-desktop.png",
        title: "2,3 millions",
        content: `C'est le nombre de personnes
        qui se retrouvent chaque mois
        sur PAP.fr pour vendre, acheter ou louer leur logement.`
      },
      {
        img: "src/visuel-home-desktop.png",
        title: "2,3 millions",
        content: `C'est le nombre de personnes
        qui se retrouvent chaque mois
        sur PAP.fr pour vendre, acheter ou louer leur logement.`
      }, {
        img: "src/visuel-home-desktop.png",
        title: "2,3 millions",
        content: `C'est le nombre de personnes
        qui se retrouvent chaque mois
        sur PAP.fr pour vendre, acheter ou louer leur logement.`
      }, {
        img: "src/visuel-home-desktop.png",
        title: "2,3 millions",
        content: `C'est le nombre de personnes
        qui se retrouvent chaque mois
        sur PAP.fr pour vendre, acheter ou louer leur logement.`
      }, {
        img: "src/visuel-home-desktop.png",
        title: "2,3 millions",
        content: `C'est le nombre de personnes
        qui se retrouvent chaque mois
        sur PAP.fr pour vendre, acheter ou louer leur logement.`
      }]
  }

}
