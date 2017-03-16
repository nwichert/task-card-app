import { Component } from '@angular/core'; // every component will have this

@Component({
  moduleId: module.id, // not required if you do inline templating
  selector: 'app-card',
  templateUrl:'card.component.html',
  styleUrls: [ 'card.component.css' ] // always needs to be an array
})

export class CardComponent { }