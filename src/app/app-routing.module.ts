import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./item/items.component";
import { AyudaComponent } from "./ayuda/ayuda.component";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
    { path: "", redirectTo: "/(items:items//ayuda:ayuda//menu:menu)", pathMatch: "full"},
    { path: "items", component: ItemsComponent, outlet:"items"},
    { path: "ayuda", component: AyudaComponent, outlet:"ayuda" },
    { path: "menu", component: MenuComponent, outlet:"menu" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)], 
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
