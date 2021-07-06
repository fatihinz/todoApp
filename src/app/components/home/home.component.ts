import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Key } from 'protractor';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  // data= {};


  pendings = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  InProgress=[
    'Check e-mail',
    'Walk dog'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower'

  ];



  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.setItems();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  addTodo(todo){
      this.pendings.push(todo.value);
      todo.value="";
      localStorage.setItem('pendings',JSON.stringify(this.pendings));
  }

  setItems(){

     localStorage.setItem('pendings', JSON.stringify(this.pendings));
      localStorage.setItem('InProgress', JSON.stringify(this.InProgress));
      localStorage.setItem('done', JSON.stringify(this.done));
  }


  // addTodo(todo){
  //   const obj = { todo: todo.value};
  //   this.todoService.addTodo(obj)
  //   .subscribe((res)=>{
  //     console.log(res);
  //   },(err)=>{
  //     console.log(err);
  //   })
  // }

}

