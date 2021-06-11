import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DovumentServiceService, Document } from './../dovument-service.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.scss']
})
export class EditlistComponent implements OnInit {

  constructor(public docService: DovumentServiceService, @Inject(MAT_DIALOG_DATA) public data: {num,text,i}) { }
  newTitle;

  ngOnInit(): void {
  }

  editDoc() {
    const doc: Document  = {
      id: this.data.num,
      title: this.newTitle,
      body: this.data.text
    }
    this.docService.edidDoc(this.data.i,doc);
  }

}
