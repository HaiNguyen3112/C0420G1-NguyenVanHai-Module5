import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentEditComponent } from './student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentEditComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
