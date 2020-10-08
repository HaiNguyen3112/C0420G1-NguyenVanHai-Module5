import { Component, OnInit } from '@angular/core';
import {DictionaryService, IWord} from '../dictionary.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word: IWord;
  formAdd: FormGroup;
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      key: new FormControl(''),
      meaning: new FormControl(''),
    });
  }
  // tslint:disable-next-line:typedef
  search(word: string) {
    const meaning = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning
    };
  }
  // tslint:disable-next-line:typedef
  Add(form){
    this.word = form.value;
    this.dictionaryService.getAll().push(this.word);
  }
}
