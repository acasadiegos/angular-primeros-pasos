import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>

        <button (click)="increaseBy(+1)">+1</button>
        <button (click)="reset()">+1</button>
        <button (click)="increaseBy(-1)">-1</button>
    `
})

export class CounterComponent  {
    private defaultCounterValue : number = 10;
    public counter: number;

    constructor() {
        this.counter = this.defaultCounterValue;
     }

    increaseBy( value: number ):void {
        this.counter += value;
      }
    
      reset(): void {
        this.counter = this.defaultCounterValue;
      }
}