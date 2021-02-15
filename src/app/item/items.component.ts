import { Component, OnInit } from "@angular/core";

import { ItemService } from "./item.service";
import { Page } from "@nativescript/core";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: any;
    currentTab = 'Home';

    constructor(private page: Page,
        private itemService: ItemService) { }

    ngOnInit() {

        this.items = this.itemService.fetchData();
        console.log(this.items)
    }
}
 