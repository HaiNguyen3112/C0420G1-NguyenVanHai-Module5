import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input()
  student: Student;
  @Output()
  myOutput: EventEmitter<number> = new EventEmitter();

  // tslint:disable-next-line:typedef
  changeMark(value){
    this.student.studentMark = value;
    this.myOutput.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
