import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DovumentServiceService } from './../dovument-service.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-deldialog',
  templateUrl: './deldialog.component.html',
  styleUrls: ['./deldialog.component.scss']
})
export class DeldialogComponent implements OnInit {

  constructor(public docService : DovumentServiceService, @Inject(MAT_DIALOG_DATA) public data: {currId}) { }

  ngOnInit(): void {
  }

  deleteDoc() {
    this.docService.deleteDoc(this.data.currId);
  }

}
