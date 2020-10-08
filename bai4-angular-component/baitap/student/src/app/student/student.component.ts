import {Component, OnInit} from '@angular/core';
import {Student} from '../../../student';
import {FormControl, FormGroup} from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor() {
  }
  students: Student[] = [
    {studentId: 1, studentName: 'Hai', studentAge: 26, studentEmail: 'hainguyen@gmail.com', studentAddress: 'Tieu La'},
    {studentId: 2, studentName: 'Hai2', studentAge: 20, studentEmail: 'hainguyen@gmail.com', studentAddress: 'Tieu La'},
    {studentId: 3, studentName: 'Hai3', studentAge: 22, studentEmail: 'hainguyen@gmail.com', studentAddress: 'Tieu La'},
    {studentId: 4, studentName: 'Hai4', studentAge: 23, studentEmail: 'hainguyen@gmail.com', studentAddress: 'Tieu La'},
  ];
  studentDetail: Student;
  tempStudent = new Student();
  isShowForm = false;
  isEdit = false;
  addNewStudent: FormGroup;
  editStudent: FormGroup;
  deleteStudent: FormGroup;
  studentNew = new Student();
  // tslint:disable-next-line:typedef
  detailStudent(value) {
    this.studentDetail = value;
  }

  // tslint:disable-next-line:typedef
  getMark(value) {
    this.studentDetail.studentMark = value;
  }

  // tslint:disable-next-line:typedef
  remove(index) {
    const idx = this.students.findIndex(student => student.studentId === index);
    this.students.splice(idx, 1);
  }
  // tslint:disable-next-line:typedef
  DeleteStudent(form){
    this.studentNew = form.value;
    const index = this.students.findIndex(student => student.studentId === this.studentNew.studentId);
    this.students.splice(index, 1);
    document.getElementById('formDelete').click();
  }
  // tslint:disable-next-line:typedef
  AddNewStudent(form) {
    this.students.push(form.value);
    // this.isShowForm = !this.isShowForm;
    document.getElementById('form').click();
  }
  // tslint:disable-next-line:typedef
  EditStudent(form){
    this.studentNew = form.value;
    const index = this.students.findIndex(student => student.studentId === this.studentNew.studentId);
    this.students[index] = this.studentNew;
    // $('#formEdit').modal('hide');
    // hide pop up
    document.getElementById('formEdit').click();
  }
  // tslint:disable-next-line:typedef
  getInfo(value: Student){
    this.editStudent.patchValue(value);
    this.studentNew = value;
  }
  ngOnInit(): void {
    // @ts-ignore
    this.addNewStudent = new FormGroup({
      studentId: new FormControl(''),
      studentName: new FormControl(''),
      studentAge: new FormControl(''),
      studentEmail: new FormControl(''),
      studentAddress: new FormControl(''),
    });

    this.editStudent = new FormGroup({
      studentId: new FormControl(''),
      studentName: new FormControl(''),
      studentAge: new FormControl(''),
      studentEmail: new FormControl(''),
      studentAddress: new FormControl(''),
    });
    this.deleteStudent = new FormGroup({
      studentId: new FormControl(''),
      studentName: new FormControl(''),
      studentAge: new FormControl(''),
    });
  }
}
