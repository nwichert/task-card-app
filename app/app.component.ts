import { Component } from '@angular/core';

import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})
export class AppComponent { 
    private tasks = [
        new Task(
            "Buy a monkey",
            false
        ),
        new Task(
            "Sell the money",
            false
        )
    ]
 }