"use strict";


const testTaskTwo = {
  id: 4,
  title: 'Drink water',
  description: 'no important',
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
    Object.entries(props).forEach(([key, value]) => task[key] = value);
    console.log(this.tasks)
  },
  sortTaskByPriority() {
    const tasks = this.tasks;
    tasks.sort((a, b) => a.priority > b.priority ? 1 : -1);
    this.tasks = tasks;
    console.log(this.tasks);
  },
};

const newTask = {
  tasks: [
    {id: 1,  title: 'Make homework', description: 'important', priority: 3,},
    {id: 2,  title: 'Make dinner', description: 'not important', priority: 4,}
  ],
};

const addTask = ToDoList.addTask.bind(newTask);
const deleteTaskById = ToDoList.deleteTaskById.bind(newTask);
const updateNameOrPriorityById = ToDoList.updateNameOrPriorityById.bind(newTask);
const sortTaskByPriority = ToDoList.sortTaskByPriority.bind(newTask);

addTask(testTaskTwo);
addTask({id: 3,  title: 'Pills', description: 'morning', priority: 2,});
deleteTaskById(1);
updateNameOrPriorityById(2, {title: 'Make dinner', description:5,});
sortTaskByPriority();

