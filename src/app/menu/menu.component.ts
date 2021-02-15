import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentTab = 'Menú';

  constructor() { }

  ngOnInit() {
  }

}
