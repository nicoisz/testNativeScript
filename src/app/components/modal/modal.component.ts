import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDialogParams } from '@nativescript/angular';
import { uiService } from '../../ui.service';

@Component({
  selector: 'ns-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isCreating=true;
  title = '';
  description = '';
  date='';
  idItem='';
  constructor(private uiService: uiService, private modalParams:ModalDialogParams, private router:Router) { }

  ngOnInit() {
  console.log("modal params",this.modalParams.context);
    this.title = this.modalParams.context.title;
    this.description = this.modalParams.context.description;
    this.idItem = this.modalParams.context.id;
    this.date = this.modalParams.context.date;
  }

  closeModal(args){
    args.object.closeModal();
  }

  
  onSubmit() {
      let item = {title: this.title, description: this.description, date:this.date, id:this.idItem};
    
      this.uiService.UpdateData(item).subscribe(res =>{
        try {
          this.modalParams.closeCallback();

        } catch (error) {
          console.log(error);
        }
      });
  }
}
