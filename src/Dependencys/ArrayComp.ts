import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ArithmaticOperations } from "./ArithmaticServises";
@Component({
    selector : "app-array",
    templateUrl : 'Array.html',
    imports : [FormsModule],
    providers:[ArithmaticOperations]
})
export class ArrayClass {
    data : any = [];
    sum : any = 0;
    num : any;
    result : any = 0;
    constructor(private op : ArithmaticOperations){

    }
    AddIntoArray(a:any){
        this.data.push(a)
        this.num=""
    }
    Calculate(){
        this.result = this.op.AddArray(this.data)
    }


}