import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

	items: any[] = [];

  constructor(private wikiService: WikiService) { }

  public search(term: string) {
  	this.wikiService.search(term)
  	.subscribe(response => this.items = response);
  }

  ngOnInit() {
  }

}
