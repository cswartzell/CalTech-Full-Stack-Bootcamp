import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  fname: string = "Cameron"
  // buttonToggle1: boolean = true
  // buttonToggle2: boolean = true

  buttonToggle1: boolean = false //toggle set with {{}} string interp binding. DOESNT UPDATE
  buttonToggle2: boolean = false //toggle set with [] property binding. Dynamic
  buttonToggle3: boolean = true //toggle set with [] property binding. Dynamic

}
