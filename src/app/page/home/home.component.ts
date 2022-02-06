import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageHouse = ["มัณ1.png","มัณ2.png","มัณ3.png","มัณ4.png","มัณ5.png","มัณ6.png","มัณ7.png","มัณ8.png","มัณ9.png","มัณ10.png","มัณ11.png","มัณ12.png","มัณ13.png","มัณ14.png","มัณ15.png","มัณ16.png"];
  imagewall = ["นิรัน1.png","นิรัน2.png","นิรัน3.png"];
  imageRes = ["เอเชียทีค1.png","เอเชียทีค2.png","เอเชียทีค3.png","เอเชียทีค4.png","เอเชียทีค5.png","เอเชียทีค6.png","เอเชียทีค7.png","เอเชียทีค8.png","เอเชียทีค9.png"];
  imageConstrution = ["โกดัง1.png","โกดัง2.png","โกดัง3.png"];
  constructor() { }

  ngOnInit(): void {
 
  }

}
