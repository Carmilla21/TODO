import { Component, OnInit } from '@angular/core';
import {TODO} from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo : TODO[] = 
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
 isCompleted(todo:any) {
   
   todo.completed = true;
   

 }

  constructor() { }

  ngOnInit(): void {
  }

}
