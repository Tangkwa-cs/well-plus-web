import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
imageDetail:any;

  constructor() { }

  ngOnInit(): void {
    this.imageDetail = history.state;
    if (this.imageDetail.type == "1") {
      this.imageDetail.type = "INTERIOR";
    }else if (this.imageDetail.type == "2") {
      this.imageDetail.type = "3D";
    }else if (this.imageDetail.type == "3") {
      this.imageDetail.type = "CONSTRUCTION";
    }else{
      this.imageDetail.type = "DECORATION";
    }
  }

}
