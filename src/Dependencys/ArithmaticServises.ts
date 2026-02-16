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

    AdditionInRange(s:any,e:any){
            var sum = 0;
            for(var i=s;i<=e;i++)
            {
                sum=Number(sum)+Number(i);
            }
            return sum;
        }

        AddArray(data:any){
            var sum = 0;
            data.forEach(function(a:any,k:any)
            {
                sum= Number(sum)+Number(a);
            })
            return sum;
        }
}