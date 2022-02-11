import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  imageDetail:any;
  constructor() { }

  ngOnInit(): void {
    console.log(history.state)
    this.imageDetail = history.state;

  }

}
