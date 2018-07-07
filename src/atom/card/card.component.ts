import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Card } from "./card";

@Component({
    selector: "wb-card",
    templateUrl: "card.html",
    styleUrls: ["card.scss"],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: "wb-card"
    }
})
export class CardComponent {
    @Input()
    card: Card
}