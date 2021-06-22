import { DeldialogComponent } from './../deldialog/deldialog.component';
import { ListDiComponent } from './../list-di/list-di.component';
import { EditlistComponent } from './../editlist/editlist.component';
import { DialogComponent } from './../dialog/dialog.component';
import { DovumentServiceService, Document, PeriodicElement } from './../dovument-service.service';
import { Component,ViewChild,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrintComponent } from '../print/print.component';
import { ColorEvent } from 'ngx-color';
import {MatTable} from '@angular/material/table';
import { ImagePickerConf } from 'ngp-image-picker';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  constructor(public docService: DovumentServiceService, public dialog: MatDialog) { }
  title="";
  color='';
  selected='';
  select = "" ;
  weight="";
  body = "";
  form="";
  a="";
  b="";
  id = Date.now();
  text:string;
  ckeditorContent="";
  style;
  currIdx;
  currDoc;
  qwe;
  qwer;
  glob;
  count;
  displayedColumns: string[] = ['none1', 'none2', 'none3', 'none4'];
  dataSource = [...this.docService.ELEMENT_DATA];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = this.docService.ELEMENT_DATA;
  tableOn:boolean;
  imagePickerConf: ImagePickerConf = {
    borderRadius: "4px",
    language: "en",
    width: "120px",
    height: "120px",
  };

  ngOnInit(): void {
  }



  editDoc(i) {

    let docBody = document.querySelector(".structure");
    this.glob = docBody;
    console.log(docBody);
    const doc: Document = {
      id: this.id,
      title: this.title,
      body: this.ckeditorContent,
      style: docBody
    }

    this.docService.edidDoc(i,doc)
  }

  addDoc() {

    const doc: Document = {
      id: this.id,
      title: this.ckeditorContent,
      body: this.body
    }
    this.docService.addDoc(doc)
    console.log(this.docService.docs);

  }

  deleteDoc(id) {
    this.docService.deleteDoc(id);

  }

  checkDoc(i,id){
    const currDoc = this.docService.docs[i];
    const body = currDoc.body;
    const title = currDoc.title;
    this.qwe = currDoc.id.toString();
    this.qwer = currDoc.id;
    console.log(this.qwe);
    console.log(body);
    this.ckeditorContent = body;
    this.title = title;
    this.currIdx = i;
    console.log(this.currIdx);
    const idx = this.docService.docs.findIndex(doc => doc.id === id);
    console.log(idx);
  }

  openDoc() {
    const dialogref = this.dialog.open(DialogComponent) ;
  }

  openDialog() {
    const doc: Document = {
      id: this.id,
      title: this.a,
      body: this.b
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
    this.tableOn = !this.tableOn;
  }

  handleChange ($event:ColorEvent)  {
  }

  @ViewChild(MatTable) table: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.docService.ELEMENT_DATA.length);
    this.dataSource.push(this.docService.ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

    addColumn() {
      const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
      this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    }

    removeColumn() {
      if (this.columnsToDisplay.length) {
        this.columnsToDisplay.pop();
      }
    }

    openDelDialog(id) {
      const currId = id;
      const dialogref = this.dialog.open(DeldialogComponent, {
        data: {currId},
      });
      this.ckeditorContent = "";
      this.title = "Новый документ";
    }

    // route() {
    //   this.router.navigate(['/upload']);
    // }
}

