import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptHttpClientModule, NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ListViewComponent } from "./components/list-view/list-view.component";
import { AyudaComponent } from "./ayuda/ayuda.component";
import { MenuComponent } from './menu/menu.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ListViewComponent,
        AyudaComponent,
        MenuComponent,
        ActionBarComponent,
        ModalComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents:[
        ModalComponent,
    ]
})
export class AppModule { } 
