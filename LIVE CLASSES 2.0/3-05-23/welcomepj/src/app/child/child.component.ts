import { Component } from "@angular/core";

@Component({
    selector: "app-child",
    templateUrl: "./child.component.html",
    styleUrls: ["./child.component.css"] // must be array of strings
})

export class Child {
    msg: string = "This is child component";
}