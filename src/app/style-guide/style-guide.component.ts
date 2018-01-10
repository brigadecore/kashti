import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).foundation();
  }

}
