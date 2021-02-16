import { HttpClient } from "@angular/common/http";
import { Injectable, ViewContainerRef } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class ItemService {

    items:any;
   
    constructor(private http: HttpClient){

    }


    fetchData(){
        
        return new Promise((resolve,reject) => {
            this.http.get('https://nativescript-15dfb-default-rtdb.firebaseio.com/registros.json').subscribe(res => {
                if(res){
                    this.items = res;
                    resolve(this.items);
                }else{
                    reject();
                }
            });
        });
    }

   
}
