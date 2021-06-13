import { DovumentServiceService } from './../dovument-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-di',
  templateUrl: './list-di.component.html',
  styleUrls: ['./list-di.component.scss']
})
export class ListDiComponent implements OnInit {

  constructor(public docService: DovumentServiceService) { }

  list;

  ngOnInit(): void {
  }


  createElement() {
    // this.count = this.count +1;
    // this.docService.createElement()
    this.docService.createElement();
  }

  removeElement() {
    this.docService.removeElement();
  }
}
