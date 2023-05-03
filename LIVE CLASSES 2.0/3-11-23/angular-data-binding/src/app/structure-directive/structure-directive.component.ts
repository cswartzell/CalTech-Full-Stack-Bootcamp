import { Component } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent {
  f1: boolean = true;
  f2: boolean = false;
  f3: boolean = false;
  f4: boolean = false;
  showImg: boolean = false;
  b1: string = "show image";
  fun() {
    this.f3 = !(this.f3);
  }

  funtasy() {
    this.f4 = !this.f4;
    // if (this.f4) {
    //   this.b1 = "hide image"
    // } else {
    //   this.b1 = "show image"
    // }
    // JS TERNARY
    this.b1 = this.b1=="show image"?"hide image":"show image";
  }

  names:Array<string>=["tom","bob","mel"]

}
