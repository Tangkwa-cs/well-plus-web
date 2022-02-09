import { Component, OnInit } from '@angular/core';
// import { SwiperComponent } from "swiper/angular";
// import SwiperCore, { Swiper, Virtual } from 'swiper';
// import Swiper styles
// SwiperCore.use([Virtual]);
// import 'swiper/css';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageHouse = ["มัณ1.png","มัณ2.png","มัณ3.png","มัณ4.png","มัณ5.png","มัณ6.png","มัณ7.png","มัณ8.png","มัณ9.png","มัณ10.png","มัณ11.png","มัณ13.png","มัณ14.png","มัณ15.png","มัณ16.png"];
  imagewall = ["นิรัน1.png","นิรัน2.png","นิรัน3.png"];
  imageRes = ["เอเชียทีค1.png","เอเชียทีค2.png","เอเชียทีค3.png","เอเชียทีค4.png","เอเชียทีค5.png","เอเชียทีค6.png","เอเชียทีค7.png","เอเชียทีค8.png","เอเชียทีค9.png"];
  imageConstrution = ["โกดัง1.png","โกดัง2.png","โกดัง3.png"];
  imageSwiper = ["ร้านเสื้อผ้า3.png","เอเชียทีค3.png","มัณ3.png"];
  
  // @ViewChild('swiper', { static: false }) swiper:any;
  
  constructor() { }

  ngOnInit(): void {
    this.loadScript();
  }

  // slideNext(){
  //   this.swiper.swiperRef.slideNext(100);
  // }
  // slidePrev(){
  //   this.swiper.swiperRef.slidePrev(100);
  // }
  public loadScript(){
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../../assets/js/core.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
    
    body = <HTMLDivElement> document.body;
    script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../../assets/js/script.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}

