"use strict";
var Task = (function () {
    function Task(// will tell us what fields we'll need to populate to create a Task class
        content, completed) {
        this.content = content;
        this.completed = completed;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map