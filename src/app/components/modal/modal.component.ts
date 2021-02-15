import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from '@nativescript/angular';
import { uiService } from '../../ui.service';

@Component({
  selector: 'ns-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  currentTab = 'Menú';
  isCreating=true;
  title = '';
  description = '';
  date='';
  idItem:any;
  constructor(private uiService: uiService, private modalParams:ModalDialogParams) { }

  ngOnInit() {
    console.log("modal params",this.modalParams.context);
    this.title = this.modalParams.context.name;
    this.description = this.modalParams.context.role;
    this.idItem = this.modalParams.context.id;
  }

  closeModal(args){
    args.object.closeModal();
  }

  
  onSubmit(title: string, description: string, date:string) {
    // ...

    console.log("data on submit",title,description,date);
    if (this.isCreating) {
      this.uiService.createNewData(title, description,date);
    } else {
      this.uiService.updateData(title, description,date);
    }
    //this.router.backToPreviousPage();
  }
}
