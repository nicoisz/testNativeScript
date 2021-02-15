import { HttpClient } from "@angular/common/http";
import { Injectable, ViewContainerRef } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class uiService {
    
    private _rootVCRef: ViewContainerRef;

  
    constructor(private http: HttpClient){

    }

    createNewData(title:string, description:string,date:string){
        const newData = {title, description, date};
        this.http.put('https://nativescript-15dfb-default-rtdb.firebaseio.com/registros.json',newData).subscribe( res => {
            console.log(res);
        });
    }

    updateData(title:string, description:string,date:string){
        const newData = {title, description, date};
        this.http.put('https://nativescript-15dfb-default-rtdb.firebaseio.com/registros.json',newData).subscribe( res => {
            console.log(res);
        });
    }

    getRootVCRef(){
        return this._rootVCRef;
    }

    setRootVCRef(vcRef: ViewContainerRef){
        this._rootVCRef = vcRef;
    }
}
