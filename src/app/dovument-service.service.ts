import { Injectable } from '@angular/core';

export interface Document {
  id:number
  title: string,
  body:string
  style?:any;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface ImagePickerConf {
  width?: string;
  height?: string;
  borderRadius?: string;
  compressInitial?: boolean;
  language?: string;
}



@Injectable({
  providedIn: 'root'
})



export class DovumentServiceService {

  constructor() { }

  docs : Document[] =[
    {id:1,title:"Document 1", body:"body text of document 1"},
    {id:2,title:"Document 2", body:"body text of document 2"},
    {id:3,title:"Document 3", body:"body text of document 3"},

  ];

   ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: "none", weight: 1.0079, symbol: 'H'},
    {position: 2, name: "none", weight: 4.0026, symbol: 'He'},
    {position: 3, name: "none", weight: 6.941, symbol: 'Li'},
    {position: 4, name: "none", weight: 9.0122, symbol: 'Be'},
    {position: 5, name: "none", weight: 10.811, symbol: 'B'},
    // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  list = [];
  table = [[],[]];
  // tr = [];matrix = [[12, 34, 56], [78, 91, 10], [26, 83, 13]];
  // td = [];


  addDoc(doc:Document){
    this.docs.push(doc)
  }

  edidDoc(i,doc:Document){
    this.docs.splice(i,1,doc);
    console.log(this.docs);
  }

  deleteDoc(id) {
    this.docs = this.docs.filter(doc => doc.id !== id);

  }

  createElement() {
     this.list.push(1);
     console.log(this.list);
  }

  removeElement() {
    this.list.shift();
    console.log(this.list);
  }

  // addCol() {
  //   this.tr.push(1)
  //   console.log(this.tr)
  // }

  // removeCol() {
  //   this.tr.shift()
  // }

  // addRow() {
  //   this.td.push(1)
  //   console.log(this.td)
  // }

  // removeRow() {
  //   this.td.shift()
  // }

  addTable() {
    this.table.push([1,1]);
  }

  removeTable() {
    this.table.shift();
  }
}
