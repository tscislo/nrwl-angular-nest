import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'angular-events-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list = [{
    title : 'aaa'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
