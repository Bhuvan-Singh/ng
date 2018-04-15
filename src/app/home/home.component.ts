import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount: number ;
  buttonText: string = 'Add Task Item';
  taskText: string = 'My first task item';
  tasks = [];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.tasks.length;
  }

  addItem(){
    this.tasks.push(this.taskText);
    this.taskText = '';
    this.itemCount = this.tasks.length;
  }

  removeItem(i){
    this.tasks.splice(i, 1);
  }

}
