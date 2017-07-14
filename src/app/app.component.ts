import { Component } from '@angular/core';
import { CarrotJuiceService } from "./carrot-juice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testilicious';
  items: string[] = [];
  todoName: string = '';
  juice = 'empty';

  constructor(private juicer: CarrotJuiceService) {}

  addItem() {
    this.items.push(this.todoName);
    this.todoName = '';
  }

  juiceIt() {
    this.juicer
      .makeJuiceFromTheWeb('potato')
      .subscribe(
        v => this.juice = v,
        e => this.juice = e.message
      )
  }
}
