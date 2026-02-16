import {Component} from "@angular/core"
import { ArithmaticOperations } from "./ArithmaticServises";
import { FormsModule } from "@angular/forms";
import { ArrayClass } from "./ArrayComp";

@Component({
    selector : "app-root",
    templateUrl:"Project.html",
    providers :[ArithmaticOperations],
    imports: [FormsModule, ArrayClass],
})

export class Projectclass{
        num1:any;
        num2:any;
        data : any = [];
        result:any;
        constructor(private op : ArithmaticOperations){
            
        } 
    
        Addition(a:any,b:any){
            this.result="Add ("+ this.op.Addition(a,b)+")";
        }
        Substration(a:any,b:any){
            this.result="Sub ("+ this.op.Substration(a,b)+")";
        }
        Multiplication(a:any,b:any){
            this.result="Multi ("+ this.op.Multiplication(a,b)+")";
        }
        Division(a:any,b:any){
            this.result="Div ("+ this.op.Division(a,b)+")";
        }

        AdditionInRange(s:any,e:any){
            this.result="AddInRange ("+ this.op.AdditionInRange(s,e)+")";
        }

        AddArray(a:any,b:any){
            this.data.push(a,b)
            this.num1=""
            this.num2=""
        }
        CalculateArray(){
            this.result ="Calculated Array ("+ this.op.AddArray(this.data)+")"
        }


        
}