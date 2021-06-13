import { TablediComponent } from './../tabledi/tabledi.component';
import { ListDiComponent } from './../list-di/list-di.component';
import { EditlistComponent } from './../editlist/editlist.component';
import { DialogComponent } from './../dialog/dialog.component';
import { DovumentServiceService, Document } from './../dovument-service.service';
import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrintComponent } from '../print/print.component';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  constructor(public docService: DovumentServiceService, public dialog: MatDialog) { }
  title:string;
  color='';
  selected='';
  select = "" ;
  weight="";
  body = "";
  form="";
  id = Date.now()
  text:string;
  style;
  currIdx;
  currDoc;
  qwe;
  qwer;
  glob;
  count;



  ngOnInit(): void {
  }



  editDoc(i) {

    let docBody = document.querySelector(".structure");
    this.glob = docBody;
    console.log(docBody);
    const doc: Document = {
      id: this.id,
      title: this.title,
      body: this.body,
      style: docBody
    }

    this.docService.edidDoc(i,doc)
  }

  addDoc() {

    const doc: Document = {
      id: this.id,
      title: this.title,
      body: this.body
    }
    this.docService.addDoc(doc)
    console.log(this.docService.docs);

  }

  deleteDoc(id) {
    this.docService.deleteDoc(id)

  }

  checkDoc(i,id){
    const currDoc = this.docService.docs[i];
    const body = currDoc.body;
    const title = currDoc.title;
    this.qwe = currDoc.id.toString();
    this.qwer = currDoc.id;
    console.log(this.qwe);
    console.log(body);
    this.body = body;
    this.title = title;
    this.currIdx = i;
    console.log(this.currIdx);
    const idx = this.docService.docs.findIndex(doc => doc.id === id);
    console.log(idx);

    if (id == this.qwer){
    const aaa = document.getElementById(this.qwe);
    console.log(aaa);
    }

  }

  openDialog() {
    const doc: Document = {
      id: this.id,
      title: this.title,
      body: this.body
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { doc },
    });
  }

  openEditDialog(i) {
    const num = this.id;
    const text = this.body;
    const doc: Document = {
      id: this.id,
      title: this.title,
      body: this.body
    }
    const dialogRef = this.dialog.open(EditlistComponent, {
      data: {num,text,i},
    });
  }

  openSecDialog() {
    const dialogRef = this.dialog.open(PrintComponent);
  }

  onKeydown(event: KeyboardEvent) {
    event.key == "z" && event.ctrlKey;
  }

  createElement() {
    const dialogRef = this.dialog.open(ListDiComponent);

  }

  createSecElement() {
    const dialogRef = this.dialog.open(TablediComponent);

  }

  handleChange ($event:ColorEvent)  {
  }

}

