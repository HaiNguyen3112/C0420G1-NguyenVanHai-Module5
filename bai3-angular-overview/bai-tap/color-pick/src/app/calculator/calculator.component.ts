import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  output: number;
  first: number;
  second: number;
  operator: any;
  onFirstChange(value): void{
    this.first = Number(value);
  }
  onSecondChange(value): void{
    this.second = Number(value);
  }
  onSelectChange(value): void {
    this.operator = value;
  }
  calculator(): void{
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
