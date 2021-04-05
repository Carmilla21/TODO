import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import {TODO} from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task : TODO[] = 
  [{
    task: "fold clothes", 
    completed:true,
  }, {

  task: "put clothes in drawer",
  completed: false,

  }, {
    task: "relax",
    completed:false,
  }, {
    task: "breathe",
    completed: true
  }, {
    task: "relax",
    completed: false,
  }, {
    task: "breathe",
    completed: true,
  }
]

searchText: string | null = null;
newTask: string | null = null;

 isCompleted(task:any) {
   
   task.completed = true;
   

 }

 addTask() {
this.task.push({task: this.newTask, completed: false});
  }

 removeTask(todo: TODO) {
   let i = this.task.findIndex(tasks => tasks === todo)
   this.task.splice(i, 1);
 }

  constructor() { }

  ngOnInit(): void {
  }

}
