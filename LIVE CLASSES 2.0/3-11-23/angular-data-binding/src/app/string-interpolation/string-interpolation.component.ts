import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  fname: string = "CamS"

  sayHello(name: string) {
    return "Welcome to angular " + name;
  }

  addNumber(a: number, b: number) {
    return a + b;
  };
}
