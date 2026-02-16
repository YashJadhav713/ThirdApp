import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-root',
    templateUrl:"Pipe.html",
    imports:[CommonModule]
})
export class Pipeclass{
    fname: any ="yash";
    lname: any = "Jadhav";
    city:any = "Nashik";
    y = 0.89347;
    j = 0.045;
    yj = new Date()
    data = [{"rno":1,"name":"Ab"},{"rno":2,"name":"cd"},{"rno":3,"name":"ef"},{"rno":4,"name":"gh"},]
    amount = 2374;
}