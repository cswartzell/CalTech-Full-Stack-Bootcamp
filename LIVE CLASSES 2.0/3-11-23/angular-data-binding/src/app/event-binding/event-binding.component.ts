import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  // msg:string; //ERROR, not initialized
  // msg?:string; //OPTIONAL VARIABLE. Doesnt have to be initialized
  msg?: string;
  toggle: boolean = true
  ans?: number = 0
  clicked() {
    if (this.toggle) {
      this.msg = "Hello"
      this.toggle = false
    }
    else {
      this.msg = "Hey"
      this.toggle = true
    }

    // alert(this.msg + ", I've Been Clicked")
  }


  storeData(nameRef: any) { //without any here, htmlelement
    let name = nameRef.value;
    alert("You entered: " + name);
  }

  //Trying Type conversion and it doesnt work. Or complains rather
  // add(n1: HTMLInputElement, n2: HTMLInputElement) {
  //   return (n1 as number) + (<number>n2);
  // }

  add(n1: any, n2: any) {
    this.ans = eval(n1.value) + eval(n2.value);
    //clear the vals. Empties the input fields
    n1.value = ""
    n2.value = ""
  }
}
