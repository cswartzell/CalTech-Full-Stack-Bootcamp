import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  last_name: string = "dynamic input"
  a_dif_binding: string = "dynamic thing"
  button_status: boolean = false
}
