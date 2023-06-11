"use strict";

const testTask = {
  id: 4,
  title: 'Drink water',
  priority: 1,
};

const ToDoList = {
  tasks: [{
    id: 1,
    title: 'Make homework',
    priority: 3,
  }, {
    id: 2,
    title: 'Go to a walk',
    priority: 1,
  }, {
    id: 3,
    title: 'Reading a book',
    priority: 2,
  }, ],
  addTask(obj) {
    this.tasks.push(obj);
    console.log(this.tasks);
  },
  deleteTaskById(id) {
    const deleteId = this.tasks.findIndex(e => e.id === id)
    this.tasks.splice(deleteId, 1)
    console.log(this.tasks)
  },
  updateNameOrPriorityById(id, props) {
    const task = this.tasks.find(el => el.id === id)
    if (!props || !Object.keys(props).length) {
      return null;
    }
    for (const key in props) {
      task[key] = props[key]
    }
  },
  sortTaskByPriority() {
    const tasks = this.tasks;
    tasks.sort((a, b) => a.priority > b.priority ? 1 : -1);
    this.tasks = tasks;
    console.log(this.tasks);
  },
};

ToDoList.addTask(testTask);
ToDoList.deleteTaskById(3);
ToDoList.updateNameOrPriorityById(4, {
  title: 'Drink gin',
  priority: 10,
  done: false,
});
ToDoList.sortTaskByPriority();
