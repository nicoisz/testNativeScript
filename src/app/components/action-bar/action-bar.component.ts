import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  
  @Input() ActionBarName: string;

  constructor() { }

  ngOnInit() {
  }

}
