import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { form } from "@angular/forms/signals";
import { squarepipeclass } from "./squarepipe";
import { PowerPipeClass } from "./powerpipe";
@Component({
    selector:"app-root",
    templateUrl:"sample.html",
    imports:[FormsModule,squarepipeclass,PowerPipeClass],
    //providers:[squarepipeclass,PowerPipeClass]
})
export class sampleclass{
    num:any;
    pow:any;
}