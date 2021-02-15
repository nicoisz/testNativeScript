import { HttpClient } from "@angular/common/http";
import { Injectable, ViewContainerRef } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class ItemService {

   
    constructor(private http: HttpClient){

    }


    fetchData(){
        return this.http.get('https://nativescript-15dfb-default-rtdb.firebaseio.com/registros.json');
    }

   
}
