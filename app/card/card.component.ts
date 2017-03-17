import { Component, Input } from '@angular/core'; // every component will have this

import { Task } from '../model/task';

@Component({
  moduleId: module.id, // not required if you do inline templating
  selector: 'app-card',
  templateUrl:'card.component.html',
  styleUrls: [ 'card.component.css' ] // always needs to be an array
})

export class CardComponent { 
  @Input() task: Task; // created a property called Task

  statusToggle() {
    this.task.completed = !this.task.completed;
  }
 }




// @Input allows us to pass data into this property
// Input in imported from @angular/core