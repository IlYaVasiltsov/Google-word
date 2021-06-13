import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablediComponent } from './tabledi.component';

describe('TablediComponent', () => {
  let component: TablediComponent;
  let fixture: ComponentFixture<TablediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablediComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
