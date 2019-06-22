import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FristWebProject';
  person1: Number;

    addPerson1() {
        this.person1=10;
        console.log(this.person1);
    } 
  person2: Number;

    addPerson2() {
        this.person2=20;
        console.log(this.person2);
    } 
}

