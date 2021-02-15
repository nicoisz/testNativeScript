import { Component,OnInit,ViewChild,ElementRef,Renderer2, ViewContainerRef } from "@angular/core";
import {  ModalDialogService } from "@nativescript/angular";
import { ItemEventData } from "@nativescript/core/ui/list-view"
import { uiService } from "../../ui.service";
import { ModalComponent } from "../modal/modal.component";
import { ItemService } from "../../item/item.service";
import { convertHSLToRGBColor } from "@nativescript/core/css/parser";

@Component({
    selector:'ns-list-view',
    templateUrl:'./list-view.component.html',
    styleUrls:['./list-view.component.css'],
    moduleId: module.id,
})

export class ListViewComponent implements OnInit {

    // @ViewChild("itemListView") itemListView: ElementRef;

    items:any;

    selected:any;
    state:any;
    titulo:any;
    subtitulo:any;

    constructor(private service: uiService,private renderer:Renderer2, private modalDialog: ModalDialogService,
         private vcRef: ViewContainerRef, private ItemService:ItemService){

    }

    ngOnInit(){
         this.ItemService.fetchData().subscribe(arg => {
              this.items = arg;
             console.log(arg);
         });

    }


    onItemTap(args: ItemEventData) {

        var item = args.view.bindingContext;

        //item.selected = !item.selected || item.selected === 'Inactive' ? 'Active':'Inactive';
        console.log("item selected",item);
        //showmodal
        this.modalDialog.showModal(ModalComponent, {
            fullscreen:true,
            viewContainerRef: this.service.getRootVCRef()? this.service.getRootVCRef(): this.vcRef,
            context: item
        });
    }

}