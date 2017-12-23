import { Component, Input } from '@angular/core';
import { Article} from './article.model';

@Component({
  selector: 'app-article',
  template: `
    <div class="container">
      <div class="row article-section">
         <div class="col-3" style="padding-left:30px;">
            <div class="score">
              <div style="font-size:1.8rem">{{article.votes}}</div>
              <div style="font-size:0.8rem">POINTS</div>
            </div>
          </div>
          <div class="col-9" style="padding-left:20px;">
            <div style="font-size:1.3rem; font-weight:bold;"><a href="{{article.link}}">{{article.title}}</a></div>
            <div style="font-size:0.9rem; padding-bottom:8px;">({{article.domain()}})</div>
            <div>
                <a href (click)="voteUp()" style="margin-right:30px;"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> upvote</a>
                <a href (click)="voteDown()"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> downvote</a>
            </div>
          </div>
      </div>
    </div>
  `,
  styles: [`
    body{
      font-size: 100%;
    }
    a{
      color: #000000;
      text-decoration: none;
    }
    a:hover{
      color: #1e90ff;
    }
    .article-section{
      padding: 5px 0 15px 20px;
      margin: 10px 0;
      border-bottom: 0.5px dotted grey;
    }
    .score{
      border-radius: 50% 50%; 
      background-color: #ffc0cb; 
      width:90px; 
      height: 90px; 
      padding-top:8px; 
      font-weight:bold; 
      text-align: center; 
      border: 1px solid black;
    }
  `]
})
export class ArticleComponent {
  @Input() article: Article;

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }

}
