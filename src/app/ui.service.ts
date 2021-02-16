import { HttpClient } from "@angular/common/http";
import { Injectable, ViewContainerRef } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class uiService {
    
    private _rootVCRef: ViewContainerRef;

    private _currentData = new BehaviorSubject(null);

    constructor(private http: HttpClient){

    }

    get currentChallenge() {
        return this._currentData.asObservable();
      }
    

    UpdateData(item) {
        return this.http.put('https://nativescript-15dfb-default-rtdb.firebaseio.com/registros/'+item.id+'.json', item);
    }
      
    
    

    getRootVCRef(){
        return this._rootVCRef;
    }

    setRootVCRef(vcRef: ViewContainerRef){
        this._rootVCRef = vcRef;
    }
}
