import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"power"})
export class PowerPipeClass implements PipeTransform{
    transform(d:any,p:any):any {
        var n = Math.pow(d,p);
        return n;
    }
}