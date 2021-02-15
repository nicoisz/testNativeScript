import { Component, ViewContainerRef } from "@angular/core";
import { uiService } from "./ui.service";
@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent { 

    constructor(private service: uiService , private vcRef: ViewContainerRef){

        this.service.setRootVCRef(this.vcRef);
    }
}
