import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles : Article[];
  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 8),
      new Article('Fullstack', 'http://fullstack.io', 5),
      new Article('Angular Expo', 'http://angularexpo.com/', 3)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean{
    console.log(`Add article title: ${title.value} and link:  ${link.value}` );
    this.articles.push(new Article(title.value , link.value,0));
    return false;
  }

  sortedArticles():Article[]{
    return this.articles.sort((a:Article, b:Article)=> b.votes - a.votes);
  }
}
