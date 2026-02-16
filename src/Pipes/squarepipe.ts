import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:"square"})
export class squarepipeclass implements PipeTransform{
    transform(d:any):any {
        var s = d*d;
        return s;
    }
}

