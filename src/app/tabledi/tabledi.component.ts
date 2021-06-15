import { DovumentServiceService, PeriodicElement } from './../dovument-service.service';
import { Component, ViewChild,OnInit } from '@angular/core';
import {MatTable} from '@angular/material/table';




@Component({
  selector: 'app-tabledi',
  templateUrl: './tabledi.component.html',
  styleUrls: ['./tabledi.component.scss']
})
export class TablediComponent implements OnInit {

  constructor(public docService: DovumentServiceService) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...this.docService.ELEMENT_DATA];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = this.docService.ELEMENT_DATA;
  ngOnInit(): void {

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

}


