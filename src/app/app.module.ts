import { DialogComponent } from './dialog/dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { PrintComponent } from './print/print.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorPickerModule } from 'ngx-color-picker';
import { EditlistComponent } from './editlist/editlist.component';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ListDiComponent } from './list-di/list-di.component';
import { TablediComponent } from './tabledi/tabledi.component';
import {MatTableModule} from '@angular/material/table';
import { CKEditorModule } from 'ng2-ckeditor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogComponent,
    PrintComponent,
    EditlistComponent,
    ListDiComponent,
    TablediComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    ColorSketchModule,
    ColorPickerModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTableModule,
    CKEditorModule,

   ],
  providers: [
    HeaderComponent,
    DialogComponent,
  ],
  // entryComponents: [DialogComponent],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
