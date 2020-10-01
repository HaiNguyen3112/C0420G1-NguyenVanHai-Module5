import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hacker-new';
  articles = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    },
  ];
  // tslint:disable-next-line:typedef
  addArticle() {
    const tempTitle = (document.getElementById('article-title') as HTMLInputElement).value;
    const tempUrl = (document.getElementById('article-url') as HTMLInputElement).value;
    this.articles.push({title: tempTitle, url: tempUrl});
  }
  // tslint:disable-next-line:typedef
  // updateArticle() {
  //   this.article.title = (document.getElementById('article-title') as HTMLInputElement).value;
  //   this.article.url = (document.getElementById('article-url') as HTMLInputElement).value;
  // }
}
