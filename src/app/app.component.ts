import { Component } from '@angular/core';
import { HeaderComponent } from './header';
import { ArticleComponent } from './article';
import { SearchComponent } from './search';
import { SearchService } from './search.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, ArticleComponent, SearchComponent]
})
export class AppComponent {

  title = "保哥的title";

  constructor(private searchsvc: SearchService) {
      // inject search service
  }
}

