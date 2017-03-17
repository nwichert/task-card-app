import { Component } from '@angular/core';

import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})
export class AppComponent { 
    private tasks: Task[] = []; // Task is our data type of array
    private currentTask = new Task(null, false);

    addTask() {
        let task = new Task(this.currentTask.content, this.currentTask.completed); // let defines a new variable
        this.tasks.push(task); // push method is used on arrays to add it to the end
        this.currentTask.content = null;
    }
 }