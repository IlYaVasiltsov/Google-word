import { DovumentServiceService } from './../dovument-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabledi',
  templateUrl: './tabledi.component.html',
  styleUrls: ['./tabledi.component.scss']
})
export class TablediComponent implements OnInit {

  constructor(public docService: DovumentServiceService) { }

  ngOnInit(): void {
  }

  // addCol() {
  //   this.docService.addCol()
  // }

  // removeCol() {
  //   this.docService.removeCol()
  // }

  // addRow() {
  //   this.docService.addRow()
  // }
  // removeRow() {
  //   this.docService.removeRow()
  // }

  addTable() {
    this.docService.addTable();
  }

  removeTable() {
    this.docService.removeTable();
  }
}
