import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Swiper, Virtual, EffectFade} from 'swiper';
import { SwiperComponent } from "swiper/angular";
import 'swiper/css';
import 'swiper/less/pagination';

// import { SwiperComponent } from 'swiper/angular';
// install Swiper modules
SwiperCore.use([Virtual]);
SwiperCore.use([EffectFade]);
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
  countImg:any;
  id = 9;
  showLoadMore = true;
  typeNow = "";
  tempImageFilter1:any;
  tempImageFilter2:any;
  tempImageFilter3:any;
  tempImageFilter4:any;
  tempImageFilter5:any;
  setClassForIsotope=false;
  @ViewChild('click1') click1?:ElementRef
  @ViewChild('swiper', { static: false }) swiper: any;
  slideNext(){
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(100);
  }

  imageProject1 = ['นิรัน1.png','นิรัน2.png','นิรัน3.png'];  
  imageProject2 = ['city1.png','city2.png','city3.png','city4.png','city5.png','city6.png','city7.png','city8.png','city9.png','city10.png','city11.png','city12.png']; 
  imageProject3 = ['สมคิด1.png','สมคิด2.png','สมคิด3.png','สมคิด4.png','สมคิด5.png','สมคิด6.png','สมคิด7.png','สมคิด8.png','สมคิด9.png','สมคิด10.png','สมคิด11.png','สมคิด12.png']; 
  imageProject4 = ['ivy1.png','ivy2.png','ivy3.png','ivy4.png','ivy5.png','ivy6.png','ivy7.png','ivy8.png','ivy9.png','ivy10.png','ivy11.png','ivy12.png','ivy13.png'];  
  imageProject5 = ['นานา1.png','นานา2.png','นานา3.png','นานา4.png','นานา5.png']; 
  imageProject6 = ['มัณ1.png','มัณ2.png','มัณ3.png','มัณ4.png','มัณ5.png','มัณ6.png','มัณ7.png','มัณ8.png','มัณ9.png','มัณ10.png','มัณ11.png','มัณ12.png','มัณ13.png','มัณ14.png','มัณ15.png','มัณ16.png']; 
  imageProject7 = ['รร ประตูน้ำ1.png','รร ประตูน้ำ2.png','รร ประตูน้ำ3.png','รร ประตูน้ำ4.png','รร ประตูน้ำ5.png','รร ประตูน้ำ6.png','รร ประตูน้ำ7.png','รร ประตูน้ำ8.png','รร ประตูน้ำ9.png','รร ประตูน้ำ10.png'];  
  imageProject8 = ['เชนจูรี่1.png','เชนจูรี่2.png','เชนจูรี่3.png','เชนจูรี่4.png','เชนจูรี่5.png','เชนจูรี่6.png'];  
  imageProject9 = ['เอเชียทีค1.png','เอเชียทีค2.png','เอเชียทีค3.png','เอเชียทีค4.png','เอเชียทีค5.png','เอเชียทีค6.png','เอเชียทีค7.png','เอเชียทีค8.png','เอเชียทีค9.png']; 
  imageProject10 = ['บลูลากูน1.png','บลูลากูน2.png','บลูลากูน3.png','บลูลากูน4.png']; 
  imageProject11 = ['ร้านเสื้อผ้า1.png','ร้านเสื้อผ้า2.png','ร้านเสื้อผ้า3.png'];  
  imageProject12 = ['กาฬสิน1-1.png','กาฬสิน1-2.png','กาฬสิน1-3.png','กาฬสิน1-4.png','กาฬสิน1-5.png','กาฬสิน1-6.png','กาฬสิน2-1.png','กาฬสิน2-2.png','กาฬสิน2-3.png','กาฬสิน2-4.png']; 
  imageProject13 = ['โรงงาน1.png','โรงงาน2.png','โรงงาน3.png','โรงงาน4.png','โรงงาน5.png','โรงงาน6.png','โรงงาน7.png','โรงงาน8.png','โรงงาน9.png','โรงงาน10.png','โรงงาน11.png','โรงงาน12.png','โรงงาน13.png','โรงงาน14.png','โรงงาน15.png']; 
  imageProject14 = ['g11.png','g12.png','g35.png','g36.png','g81.png','g82.png','g84.png','g85.png'];  
  imageProject15 = ['มัณฑนา1.png','มัณฑนา2.png','มัณฑนา3.png','มัณฑนา4.png','มัณฑนา5.png']; 
  imageProject16 = ['MT1.png','MT2.png','MT3.png','MT4.png','MT5.png']; 
  imageProject17 = ['โกดัง1.png','โกดัง2.png','โกดัง3.png'];  
  imageProject18 = ['หิน momo1.png','หิน momo2.png','หิน momo3.png','หิน momo4.png','หิน momo5.png']; 
  imageProject19 = ['หิน-โรส1.png','หิน-โรส2.png']; 
  imageProject20 = ['หิน อยุธยา1.png','หิน อยุธยา2.png','หิน อยุธยา3.png','หิน อยุธยา4.png','หิน อยุธยา5.png'];  
  imageProject21 = ['หิน-โนเบิล1.png','หิน-โนเบิล2.png','หิน-โนเบิล3.png','หิน-โนเบิล4.png','หิน-โนเบิล5.png','หิน-โนเบิล6.png','หิน-โนเบิล7.png','หิน-โนเบิล8.png','หิน-โนเบิล9.png','หิน-โนเบิล10.png','หิน-โนเบิล11.png','หิน-โนเบิล12.png']; 
  imageProject22 = ['หิน พญาไท1.png','หิน พญาไท2.png','หิน พญาไท3.png','หิน พญาไท4.png']; 
  imageProject23 = ['หิน เปาโล1.png','หิน เปาโล2.png','หิน เปาโล3.png','หิน เปาโล4.png','หิน เปาโล5.png','หิน เปาโล6.png','หิน เปาโล7.png','หิน เปาโล8.png'];  
  imageProject24 = ['หิน ศรี1.png','หิน ศรี2.png','หิน ศรี3.png','หิน ศรี4.png','หิน ศรี5.png','หิน ศรี6.png']; 
  imageProject25 = ['หิน-เชนทรัล1.png','หิน-เชนทรัล2.png','หิน-เชนทรัล3.png']; 
  imageProject26 = ['1.png','2.png','3.png'];  
  imageProject27 = ['1.png','2.png','3.png','4.png']; 
  imageProject28 = ['1.png','2.png','3.png','4.png','5.png']; 
  imageProject29 = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png'];  
  imageProject30 = ['รับรอง1.png','รับรอง2.png','รับรอง3.png']; 
  imageProject31 = ['วอลเด็ก พญาไท2-1.png','วอลเด็ก พญาไท2-2.png','วอลเด็ก พญาไท2-3.png','วอลเด็ก พญาไท2-4.png']; 
  imageProject32 = ['บ้านคุณแพร1.png','บ้านคุณแพร2.png','บ้านคุณแพร3.png','บ้านคุณแพร4.png','บ้านคุณแพร5.png','บ้านคุณแพร6.png'];  
  imageProject33 = ['ม่านรพ.1.png','ม่านรพ.2.png']; 
  imageProject34 = ['MUI-1.png']; 
  imageProject35 = ['inzศาลายา1.png','inzศาลายา2.png','inzศาลายา3.png'];  
  imageProject36 = ['เสือใหญ่1.png','เสือใหญ่2.png','เสือใหญ่3.png','เสือใหญ่4.png']; 
  imageProject37 = ['ผ้าบุ งานอุทัย1.png','ผ้าบุ งานอุทัย2.png','ผ้าบุ งานอุทัย3.png','ม่าน งานอุทัย1.png','ม่าน งานอุทัย2.png','ม่าน งานอุทัย3.png','ม่าน งานอุทัย4.png']; 
  imageProject38 = ['ม่านKB1.png','ม่านKB2.png','ม่านKB3.png','วอลKB1.png','วอลKB2.png','วอลKB3.png'];  
  imageProject39 = ['ม่าน ไอดีโอ1.png','ม่าน ไอดีโอ2.png','ม่าน ไอดีโอ3.png','ม่าน ไอดีโอ4.png','ม่าน ไอดีโอ5.png','ม่าน ไอดีโอ6.png','ม่าน ไอดีโอ7.png','วอล ไอดีโอ1.png','วอล ไอดีโอ2.png']; 
  imageProject40 = ['ม่าน กราส1.png','ม่าน กราส2.png','ม่าน กราส3.png','ม่าน กราส4.png']; 
  imageProject41 = ['ม่านยูดีไล1.png','ม่านยูดีไล2.png','ม่านยูดีไล3.png','ม่านยูดีไล4.png'];  
  imageProject42 = ['ม่านม้วนAM1.png','ม่านม้วนAM2.png','ม่านม้วนAM3.png','ม่านม้วนAM4.png']; 
  imageProject43 = ['ม่านม้วน-ศรี1.png','ม่านม้วน-ศรี2.png','ม่านม้วน-ศรี3.png','ม่านม้วน-ศรี4.png','ม่านม้วน-ศรี5.png']; 
  imageProject44 = ['1.png','ปก พญาไท.png','วอลพญาไท1.png','วอลพญาไท2.png','วอลพญาไท3.png','วอลพญาไท4.png','วอลพญาไท5.png','วอลพญาไท6.png'];  
  imageProject45 = ['วอลคาตัล1.png','วอล-คาตัล2.png','วอล-คาตัล3.png','วอลคาตัล4.png','วอลคาตัล5.png']; 
  imageProject46 = ['วอล Mer1.png','วอล Mer2.png','วอล Mer3.png','วอล Mer4.png','วอล Mer5.png','วอล Mer6.png']; 
  imageProject47 = ['วอล พระราม2-1.png','วอล พระราม2-2.png','วอล พระราม2-3.png','วอล พระราม2-4.png','วอล พระราม2-5.png'];  
  imageProject48 = ['วอล ออมสิน1.png','วอล ออมสิน2.png','วอล ออมสิน3.png','วอล ออมสิน4.png','วอล ออมสิน5.png']; 
  imageProject49 = ['วอลพิดโลก1.png','วอลพิดโลก2.png','วอลพิดโลก3.png','วอลพิดโลก4.png','วอลพิดโลก5.png','วอลพิดโลก6.png','วอลพิดโลก7.png']; 
  imageProject50 = ['วอล สิง1.png','วอล สิง2.png'];  
  imageProject51 = ['วอล สนง.1.png','วอล สนง.2.png','วอล สนง.3.png']; 
  imageProject52 = ['วอล หอพระ1.png','วอล หอพระ2.png']; 

  imageFilter = [
    {"id":1,"type":"INTERIOR","img":"../../../assets/interior/interior_wall_nirunville/นิรัน3.png","text":"ผนังลอฟ Nirun Ville","url":"../../../assets/interior/interior_wall_nirunville/"},
    {"id":2,"type":"INTERIOR","img":"../../../assets/interior/interior_thecity/city10.png","text":"หมู่บ้าน The City","url":"../../../assets/interior/interior_thecity/"},
    {"id":3,"type":"INTERIOR","img":"../../../assets/interior/interior_somkidroom/สมคิด3.png","text":"หมู่บ้าน Somkid","url":"../../../assets/interior/interior_somkidroom/"},
    {"id":4,"type":"INTERIOR","img":"../../../assets/interior/interior_pataya/ivy7.png","text":"Pattaya","url":"../../../assets/interior/interior_pataya/"},
    {"id":5,"type":"INTERIOR","img":"../../../assets/interior/interior_nana/นานา5.png","text":"ซ.นานา","url":"../../../assets/interior/interior_nana/"},
    {"id":6,"type":"INTERIOR","img":"../../../assets/interior/interior_mantana/มัณ3.png","text":"Manthana Pracha-uthi","url":"../../../assets/interior/interior_mantana/"},
    {"id":7,"type":"INTERIOR","img":"../../../assets/interior/interior_golden_Inn/รร ประตูน้ำ10.png","text":"Golden Inn","url":"../../../assets/interior/interior_golden_Inn/"},
    {"id":8,"type":"INTERIOR","img":"../../../assets/interior/interior_century_onnut/เชนจูรี่2.png","text":"Century Onnut","url":"../../../assets/interior/interior_century_onnut/"},
    {"id":9,"type":"INTERIOR","img":"../../../assets/interior/interior_asiatique/เอเชียทีค3.png","text":"Asiatique","url":"../../../assets/interior/interior_asiatique/"},
    {"id":10,"type":"INTERIOR","img":"../../../assets/interior/interior _bulakul/บลูลากูน4.png","text":"Blue Lagoont","url":"../../../assets/interior/interior _bulakul/"},
    {"id":11,"type":"3D","img":"../../../assets/3D/3D_clothShop/ร้านเสื้อผ้า1.png","text":"ClothShop","url":"../../../assets/3D/3D_clothShop/"},
    {"id":12,"type":"3D","img":"../../../assets/3D/3D_coffeeShop/กาฬสิน1-1.png","text":"CoffeeShop","url":"../../../assets/3D/3D_coffeeShop/"},
    {"id":13,"type":"3D","img":"../../../assets/3D/3D_factory/โรงงาน1.png","text":"Factory","url":"../../../assets/3D/3D_factory/"},
    {"id":14,"type":"3D","img":"../../../assets/3D/3D_GrandAlpine/g12.png","text":"GrandAlpine","url":"../../../assets/3D/3D_GrandAlpine/"},
    {"id":15,"type":"3D","img":"../../../assets/3D/3D_Mantana/มัณฑนา2.png","text":"Mantana","url":"../../../assets/3D/3D_Mantana/"},
    {"id":16,"type":"3D","img":"../../../assets/3D/3D_MoonTower/MT2.png","text":"MoonTower","url":"../../../assets/3D/3D_MoonTower/"},
    {"id":17,"type":"CONSTRUCTION","img":"../../../assets/construction/โกดังปากน้ำ/โกดัง1.png","text":"โกดังปากน้ำ","url":"../../../assets/construction/โกดังปากน้ำ/"},
    {"id":18,"type":"DECORATION","img":"../../../assets/Decor-งานหิน/หิน@Mo-Mo-Paradise เซนทรัลเวิล/หิน momo1.png","text":"หิน Mo-Mo","url":"../../../assets/Decor-งานหิน/หิน@Mo-Mo-Paradise เซนทรัลเวิล/"},
    {"id":19,"type":"DECORATION","img":"../../../assets/Decor-งานหิน/หิน@Rosewood/หิน-โรส2.png","text":"หิน Rosewood","url":"../../../assets/Decor-งานหิน/หิน@Rosewood/"},
    {"id":20,"type":"DECORATION","img":"../../../assets/Decor-งานหิน/หิน@นิคมไฮเทค อยุธยา ปี62/หิน อยุธยา4.png","text":"หิน นิคมไฮเทค อยุธยา","url":"../../../assets/Decor-งานหิน/หิน@นิคมไฮเทค อยุธยา ปี62/"},
    {"id":21,"type":"DECORATION","img":"../../../assets/Decor-งานหิน/หิน@โนเบิล คอนโด/หิน-โนเบิล4.png","text":"หิน โนเบิล คอนโด","url":"../../../assets/Decor-งานหิน/หิน@โนเบิล คอนโด/"},
    {"id":22,"type":"DECORATION","img":"../../../assets/Decor-งานหิน/หิน@รพ.พญาไท2/หิน พญาไท3.png","text":"หิน รพ.พญาไท2","url":"../../../assets/Decor-งานหิน/หิน@รพ.พญาไท2/"},
    {"id":23,"type":"DECORATION","img":"../../../assets/Decor-งานหิน/หิน@โรงพยาบาลเปาโล สมุทรปราการ/หิน เปาโล1.png","text":"หิน โรงพยาบาลเปาโล","url":"../../../assets/Decor-งานหิน/หิน@โรงพยาบาลเปาโล สมุทรปราการ/"},
    {"id":24,"type":"DECORATION","img":"../../../assets/Decor-งานหิน/หิน@ศูนย์มะเร็งศรีราชา/หิน ศรี3.png","text":"หิน ศูนย์มะเร็งศรีราชา","url":"../../../assets/Decor-งานหิน/หิน@ศูนย์มะเร็งศรีราชา/"},
    {"id":25,"type":"DECORATION","img":"../../../assets/Decor-งานหิน/หิน@ออฟฟิศ เชนทรัลเวิล/หิน-เชนทรัล2.png","text":"หิน ออฟฟิศ เชนทรัลเวิล","url":"../../../assets/Decor-งานหิน/หิน@ออฟฟิศ เชนทรัลเวิล/"},
    {"id":26,"type":"DECORATION","img":"../../../assets/Decor-tile/กระเบื้องยาง@Luxury Clinic ปี63/2.png","text":"กระเบื้องยาง Luxury Clinic","url":"../../../assets/Decor-tile/กระเบื้องยาง@Luxury Clinic ปี63/"},
    {"id":27,"type":"DECORATION","img":"../../../assets/Decor-tile/กระเบื้องยาง@สำนักงาน-ลาซาล/1.png","text":"กระเบื้องยาง สำนักงาน-ลาซาล","url":"../../../assets/Decor-tile/กระเบื้องยาง@สำนักงาน-ลาซาล/"},
    {"id":28,"type":"DECORATION","img":"../../../assets/Decor-tile/กระเบื้องยาง@เซ็นจูรี่ เดอะมูฟวี่ พลาซ่า/1.png","text":"กระเบื้องยาง เซ็นจูรี่ เดอะมูฟวี่ พลาซ่า","url":"../../../assets/Decor-tile/กระเบื้องยาง@เซ็นจูรี่ เดอะมูฟวี่ พลาซ่า/"},
    {"id":29,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่าน+วอล@ธนาคารออมสิน/1.png","text":"ม่าน+วอล ธนาคารออมสิน","url":"../../../assets/Decor-wallpeper/ม่าน+วอล@ธนาคารออมสิน/"},
    {"id":30,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่าน+วอล@ห้องรับรอง รับเสด็จ รร. นานาชาติ ปี62/รับรอง3.png","text":"ม่าน+วอล ห้องรับรอง รับเสด็จ รร. นานาชาติ","url":"../../../assets/Decor-wallpeper/ม่าน+วอล@ห้องรับรอง รับเสด็จ รร. นานาชาติ ปี62//"},
    {"id":31,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่าน+วอลเด็ก@รพ.พญาไท 2/วอลเด็ก พญาไท2-4.png","text":"ม่าน+วอลเด็ก@รพ.พญาไท 2","url":"../../../assets/Decor-wallpeper/ม่าน+วอลเด็ก@รพ.พญาไท 2/"},
    {"id":32,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่าน@บ้านคุณแพร ลาดกระบัง/บ้านคุณแพร1.png","text":"ม่านบ้าน","url":"../../../assets/Decor-wallpeper/ม่าน@บ้านคุณแพร ลาดกระบัง/"},
    {"id":33,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่าน@รพ/ม่านรพ.1.png","text":"ม่าน โรงพยาบาล","url":"../../../assets/Decor-wallpeper/ม่าน@รพ/"},
    {"id":34,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่าน@สำนักงาน บ.MUI รับเบอร์/MUI-1.png","text":"ม่าน สำนักงาน บ.MUI","url":"../../../assets/Decor-wallpeper/ม่าน@สำนักงาน บ.MUI รับเบอร์/"},
    {"id":35,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่าน@หมู่บ้าน Inizio ปิ่นเกล้า-ศาลายา/inzศาลายา2.png","text":"ม่าน หมู่บ้าน Inizio ปิ่นเกล้า-ศาลายา","url":"../../../assets/Decor-wallpeper/ม่าน@หมู่บ้าน Inizio ปิ่นเกล้า-ศาลายา/"},
    {"id":36,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่าน@เสือใหญ่/เสือใหญ่2.png","text":"ม่าน เสือใหญ่","url":"../../../assets/Decor-wallpeper/ม่าน@เสือใหญ่/"},
    {"id":37,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่านจีบ+ผ้าบุผนัง@ห้องประชุม ศาลากลาง จ.อุทัยธานี ปี63/ผ้าบุ งานอุทัย1.png","text":"ม่านจีบ+ผ้าบุผนัง ห้องประชุม ศาลากลาง จ.อุทัยธานี","url":"../../../assets/Decor-wallpeper/ม่านจีบ+ผ้าบุผนัง@ห้องประชุม ศาลากลาง จ.อุทัยธานี ปี63/"},
    {"id":38,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@คอนโด Knightsbridge พระราม3/ม่านKB1.png","text":"ม่านจีบ+วอล@คอนโด Knightsbridge","url":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@คอนโด Knightsbridge พระราม3/"},
    {"id":39,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@ไอดีโอ2 บางนา ทั้งตึก A-B ปี62/ม่าน ไอดีโอ7.png","text":"ม่านจีบ+วอล@ไอดีโอ2 บางนา","url":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@ไอดีโอ2 บางนา ทั้งตึก A-B ปี62/"},
    {"id":40,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่านจีบ@Glasshouse/ม่าน กราส4.png","text":"ม่านจีบ Glasshouse","url":"../../../assets/Decor-wallpeper/ม่านจีบ@Glasshouse/"},
    {"id":41,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่านจีบ@คอนโด ยูดีไล์ ท่าพระ/ม่านยูดีไล3.png","text":"ม่านจีบ@คอนโด ยูดีไล์","url":"../../../assets/Decor-wallpeper/ม่านจีบ@คอนโด ยูดีไล์ ท่าพระ/"},
    {"id":42,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่านม้วน sunscreen @สนง บ. AMpd/ม่านม้วนAM4.png","text":"ม่านม้วน sunscreen AMpd","url":"../../../assets/Decor-wallpeper/ม่านม้วน sunscreen @สนง บ. AMpd/"},
    {"id":43,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/ม่านม้วน แบล็คเฮ้า@ศูนย์มะเร็งศรีราชา/ม่านม้วน-ศรี3.png","text":"ม่านม้วน แบล็คเฮ้า ศูนย์มะเร็งศรีราชา","url":"../../../assets/Decor-wallpeper/ม่านม้วน แบล็คเฮ้า@ศูนย์มะเร็งศรีราชา/"},
    {"id":44,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/วอล @ รพ.พญาไท2/วอลพญาไท1.png","text":"วอล  รพ.พญาไท2","url":"../../../assets/Decor-wallpeper/วอล @ รพ.พญาไท2/"},
    {"id":45,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/วอล หัวเตียง-รอบห้อง @โรงแรมคาร์ลตัน กรุงเทพฯ สุขุมวิท/วอลคาตัล5.png","text":"วอล หัวเตียง โรงแรมคาร์ลตัน","url":"../../../assets/Decor-wallpeper/วอล หัวเตียง-รอบห้อง @โรงแรมคาร์ลตัน กรุงเทพฯ สุขุมวิท/"},
    {"id":46,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/วอล@Grand Mercure Hotel/วอล Mer3.png","text":"วอล Grand Mercure Hotel","url":"../../../assets/Decor-wallpeper/วอล@Grand Mercure Hotel/"},
    {"id":47,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/วอล@The Grand Rama-II/วอล พระราม2-1.png","text":"วอล@The Grand Rama-II","url":"../../../assets/Decor-wallpeper/วอล@The Grand Rama-II/"},
    {"id":48,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/วอล@ธ.ออมสิน สาขา ถนนเพชรบุรี/วอล ออมสิน1.png","text":"วอล ธ.ออมสิน สาขา ถนนเพชรบุรี","url":"../../../assets/Decor-wallpeper/วอล@ธ.ออมสิน สาขา ถนนเพชรบุรี/"},
    {"id":49,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/วอล@รพ.กรุงเทพ-พิษณุโลก/วอลพิดโลก7.png","text":"วอล รพ.กรุงเทพ-พิษณุโลก","url":"../../../assets/Decor-wallpeper/วอล@รพ.กรุงเทพ-พิษณุโลก/"},
    {"id":50,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/วอล@ร้านอาหาร@สิงห์ คอมเพล็ก/วอล สิง2.png","text":"วอล ร้านอาหาร สิงห์ คอมเพล็ก","url":"../../../assets/Decor-wallpeper/วอล@ร้านอาหาร@สิงห์ คอมเพล็ก/"},
    {"id":51,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/วอล@สำนักงานให้เช่า @กิ่งแก้ว/วอล สนง.3.png","text":"วอล สำนักงานให้เช่า กิ่งแก้ว","url":"../../../assets/Decor-wallpeper/วอล@สำนักงานให้เช่า @กิ่งแก้ว/"},
    {"id":52,"type":"DECORATION","img":"../../../assets/Decor-wallpeper/วอล@หอพระ ศูนย์ราชการ/วอล หอพระ1.png","text":"วอล หอพระ ศูนย์ราชการ","url":"../../../assets/Decor-wallpeper/วอล@หอพระ ศูนย์ราชการ/"},
  ];
  imageRef = ["คลีนิค นิติพล.jfif","คลีนิค ลัคชัวรี่.png","คอนโด โนเบิล.png","คอนโด IVY.png",
              "คอนโด the pillar condo.jfif","รพ.กรุงเทพ-พิดโลก.png","รพ.กรุงเทพ.jfif","รพ.เกษมราษฏร์.png","รพ.จุฬา.jfif",
              "รพ.ธรรมศาตร์รังสิต.png","รพ.เปาโล สมุทรปราการ.png","รพ.เปาโล.jfif","รพ.พญาไท.png",
              "รพ.มหาชัย2.png","รพ.มหาชัยเพชรรัตน์.jfif","รพ.ศิริราช.png","รพ.ศูนย์มะเร็งศรีราชา.png","รพ.สมิติเวช.png",
              "รร.แกรนเมอเคียว แบงคอก.jfif","รร คอนราด.png","รร คาร์ตัน สุขุมวิท.png","รร.เชอราตัล สุขุมวิท33.png","รร.IVY จอมเทียน พัทยา.jfif",
              "ร้านอาหาร MoMo เชนทรัลเวิล.png","โรงงาน ในนิคมอุตสาหกรรมไฮเทค อยุธยา.png","สนง. กิ่งแก้ว.jfif",
              "สนง ตึกศิวาเทล สยามดิส.png","สนง ตึกสิงห์.jfif","หมู่บ้าน-คอนโด เครือ ศุภลัย.jfif","หมู่บ้าน คอนโด เครืออนันดา.png","หมู่บ้าน คาซ่าแกรนด์.png",
              "หมู่บ้าน เครือ พฤกษา1.png","หมู่บ้าน เครือ พฤกษา.png","หมู่บ้าน เครือแลนแอนเฮ้า.png","หมู่บ้าน เครือ ศุภลัย.jfif","หมู่บ้าน เครือ แสนสิริ.png",
              "หมู่บ้าน เครือ AP.png","หมู่บ้าน เครือ SCแอสเชส.png","หมู่บ้าน-พร็อพเพอตี้.jfif","หมู่บ้าน มัฑณนา.png","ห้างเชนจูรี่.jfif","ห้างเชนทรัล-ลาดพร้าว.jfif",
              "ห้างเชนทรัลเวิล.png","ห้างทอง ตำหนักทอง5.jfif"
            ];

  constructor(
    private router:Router,
    private changeRef:ChangeDetectorRef
  ) { }
  
  ngOnInit(): void {
    this.loadScript();
    this.countImg = this.imageRef.length; 
    this.tempImageFilter1 = this.imageFilter
    this.tempImageFilter2 = this.imageFilter.filter(x => x.type === 'INTERIOR');
    this.tempImageFilter3 = this.imageFilter.filter(x => x.type === '3D');
    this.tempImageFilter4 = this.imageFilter.filter(x => x.type === 'CONSTRUCTION');
    this.tempImageFilter5 = this.imageFilter.filter(x => x.type === 'DECORATION');
    this.changeRef.detectChanges();
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false
    }
  }
  ngOnChanges(): void {
      this.changeRef.detectChanges(); // typeScricp โหลดไม่ทัน html
  }
  ngAfterViewInit() {
    console.log(this.click1)
    setTimeout(() => {
      this.click1?.nativeElement.click()
    }, 2000);
    
  }
  loadImage(){
    this.id =9999
    this.showLoadMore = false; 
    this.changeRef.detectChanges();
  }
 
  changeRoute(url:any,idProject:any,path:any,text:any,type:any){
    var temp = this.imageFilter.filter(x =>x.id === idProject) //วิธีฟิลเตอร์
    var imageProject
    if(idProject == 1){
      imageProject = this.imageProject1
    }else if(idProject == 2){
      imageProject = this.imageProject2
    }else if(idProject == 3){
      imageProject = this.imageProject3
    }else if(idProject == 4){
      imageProject = this.imageProject4
    }else if(idProject == 5){
      imageProject = this.imageProject5
    }else if(idProject == 6){
      imageProject = this.imageProject6
    }else if(idProject == 7){
      imageProject = this.imageProject7
    }else if(idProject == 8){
      imageProject = this.imageProject8
    }else if(idProject == 9){
      imageProject = this.imageProject9
    }else if(idProject == 10){
      imageProject = this.imageProject10
    }else if(idProject == 11){
      imageProject = this.imageProject11
    }else if(idProject == 12){
      imageProject = this.imageProject12
    }else if(idProject == 13){
      imageProject = this.imageProject13
    }else if(idProject == 14){
      imageProject = this.imageProject14
    }else if(idProject == 15){
      imageProject = this.imageProject15
    }else if(idProject == 16){
      imageProject = this.imageProject16
    }else if(idProject == 17){
      imageProject = this.imageProject17
    }else if(idProject == 18){
      imageProject = this.imageProject18
    }else if(idProject == 19){
      imageProject = this.imageProject19
    }else if(idProject == 20){
      imageProject = this.imageProject20
    }else if(idProject == 21){
      imageProject = this.imageProject21
    }else if(idProject == 22){
      imageProject = this.imageProject22
    }else if(idProject == 23){
      imageProject = this.imageProject23
    }else if(idProject == 24){
      imageProject = this.imageProject24
    }else if(idProject == 25){
      imageProject = this.imageProject25
    }else if(idProject == 26){
      imageProject = this.imageProject26
    }else if(idProject == 27){
      imageProject = this.imageProject27
    }else if(idProject == 28){
      imageProject = this.imageProject28
    }else if(idProject == 29){
      imageProject = this.imageProject29
    }else if(idProject == 30){
      imageProject = this.imageProject30
    }else if(idProject == 31){
      imageProject = this.imageProject31
    }else if(idProject == 32){
      imageProject = this.imageProject32
    }else if(idProject == 33){
      imageProject = this.imageProject33
    }else if(idProject == 34){
      imageProject = this.imageProject34
    }else if(idProject == 35){
      imageProject = this.imageProject35
    }else if(idProject == 36){
      imageProject = this.imageProject36
    }else if(idProject == 37){
      imageProject = this.imageProject37
    }else if(idProject == 38){
      imageProject = this.imageProject38
    }else if(idProject == 39){
      imageProject = this.imageProject39
    }else if(idProject == 40){
      imageProject = this.imageProject40
    }else if(idProject == 41){
      imageProject = this.imageProject41
    }else if(idProject == 42){
      imageProject = this.imageProject42
    }else if(idProject == 43){
      imageProject = this.imageProject43
    }else if(idProject == 44){
      imageProject = this.imageProject44
    }else if(idProject == 45){
      imageProject = this.imageProject45
    }else if(idProject == 46){
      imageProject = this.imageProject46
    }else if(idProject == 47){
      imageProject = this.imageProject47
    }else if(idProject == 48){
      imageProject = this.imageProject48
    }else if(idProject == 49){
      imageProject = this.imageProject49
    }else if(idProject == 50){
      imageProject = this.imageProject50
    }else if(idProject == 51){
      imageProject = this.imageProject51
    }else if(idProject == 52){
      imageProject = this.imageProject52
    }
     this.router.navigate([url], { state: { image: imageProject,path,text,type } });
  }
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
  clickRoute(url:any,title:any){
     this.router.navigate([url], { queryParams: { title} });
  }
}

