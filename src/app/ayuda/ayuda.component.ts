import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {
  currentTab = 'Ayuda';

  constructor() { }

  ngOnInit() {
  }

}
