import { Injectable } from '@angular/core';

export interface Document {
  id:number
  title: string,
  body:string
  style?:any;
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
    this.docs = this.docs.filter(doc => doc.id !== id)
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
