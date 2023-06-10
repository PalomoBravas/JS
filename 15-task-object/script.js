"use strict";

const testTask = {
  id: 4,
  'title': 'Drink water',
  priority: 1,
};

const ToDoList = {
  tasks: [
    {id: 1,  'title': 'Make homework',  priority: 3,},
    {id: 2,  'title': 'Go to a walk',  priority: 1,},
    {id: 3,  'title': 'Reading a book',  priority: 2,},
  ],
  addTask (obj) {
    this.tasks.push(obj);
    console.log(this.tasks);
  },
  deleteTaskById (id) {
    const tasks = this.tasks;
    let deleteId = null;
    tasks.forEach((e, i) => {
      if (e.id === id) {
        deleteId = i
      }
    });
    tasks.splice(deleteId, 1);
    this.tasks = tasks
    console.log(this.tasks)
  },
  updateNameOrPriorityById (id, title='', priority = 5) {
    const tasks = this.tasks;
    tasks.forEach((e) => {
      if(e.id === id) {
        if (title !== '') {
          e['title'] = title;
        }
        e.priority = priority;
      }
    });
    this.tasks = tasks;
    console.log(this.tasks);
  },
  sortTaskByPriority () {
    const tasks = this.tasks;
    tasks.sort((a, b) => a.priority > b.priority ? 1 : -1);
    this.tasks = tasks;
    console.log(this.tasks);
  },
};

ToDoList.addTask(testTask);
ToDoList.deleteTaskById(3);
ToDoList.updateNameOrPriorityById(4, 'Drink Beer');
ToDoList.sortTaskByPriority();
