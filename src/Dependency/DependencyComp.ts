import { Component } from "@angular/core";
import { ArithmaticOperations } from "./Arthmaticservice";
import { FormsModule } from "@angular/forms";

@Component ({
    selector : "app-root",
    templateUrl:"Dep.html",
    providers :[ArithmaticOperations],
    imports :[FormsModule]
})

export class Depclass{
    num1:any;
    num2:any;
    result:any;
    constructor(private op : ArithmaticOperations){
        
    } 

    Addition(a:any,b:any){
        this.result="Add"+ this.op.Addition(a,b);
    }
    Substration(a:any,b:any){
        this.result="Sub"+ this.op.Substration(a,b);
    }
    Multiplication(a:any,b:any){
        this.result="Multi"+ this.op.Multiplication(a,b);
    }
    Division(a:any,b:any){
        this.result="Div"+ this.op.Division(a,b);
    }
}