import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetNumber()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

    <hr />
  `,
})
export class CounterComponent {
  @Input() teste = 'teste';

  public counter = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetNumber(): void {
    this.counter = 10;
  }
}
