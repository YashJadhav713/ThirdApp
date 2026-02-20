import { Injectable } from "@angular/core";

@Injectable ()
export class ArithmaticOperations{
    Addition(a:any , b:any){
        var c = Number (a) + Number (b);
        return c;
    }

    Substration(a:any , b:any){
        var c = Number (a) - Number (b);
        return c;
    }

    Multiplication(a:any , b:any){
        var c = Number (a) * Number (b);
        return c;
    }


    Division(a:any , b:any){
        var c = Number (a) / Number (b);
        return c;
    }

    // ArrayAddition(a:any){
    //     var sum = 0;

    //     return sum;
    // }
}