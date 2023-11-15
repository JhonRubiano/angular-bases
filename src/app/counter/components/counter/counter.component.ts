import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter: {{ counter }}</h3>
    <button class="btn border border-black" (click)="increaseBy(+1)">+1</button>
    <button class="btn border border-black mx-4" (click)="resetCounter()"> Reset </button>
    <button class="btn border border-black" (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }
  public counter:number = 10;
  public increaseBy(value:number):void{
    this.counter += value;
  }
  public resetCounter():void{
   this.counter = 10;
  }
}
