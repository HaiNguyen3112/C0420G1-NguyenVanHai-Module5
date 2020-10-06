import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../../student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  @Input()
  studentEdit: Student;
  constructor() { }

  ngOnInit(): void {
  }

}
