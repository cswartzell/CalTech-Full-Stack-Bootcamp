import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  fname: string = "Cameron Swartzell"

  sayHello(name: string): string {
    return "welcome to angular project " + name
  }

}
