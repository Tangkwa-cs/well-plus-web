import { Component, OnInit } from '@angular/core';

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
  

  imageFilter = [
    {"type":"1","img":"../../../assets/interior/interior_wall_nirunville/นิรัน3.png","text":"ผนังลอฟ Nirun Ville","url":"../../../assets/interior/interior_wall_nirunville/"},
    {"type":"1","img":"../../../assets/interior/interior_thecity/city10.png","text":"หมู่บ้าน The City","url":"../../../assets/interior/interior_thecity/"},
    {"type":"1","img":"../../../assets/interior/interior_somkidroom/สมคิด3.png","text":"หมู่บ้าน Somkid","url":"../../../assets/interior/interior_somkidroom/"},
    {"type":"1","img":"../../../assets/interior/interior_pataya/ivy7.png","text":"Pattaya","url":"../../../assets/interior/interior_pataya/"},
    {"type":"1","img":"../../../assets/interior/interior_nana/นานา5.png","text":"ซ.นานา","url":"../../../assets/interior/interior_nana/"},
    {"type":"1","img":"../../../assets/interior/interior_mantana/มัณ3.png","text":"Manthana Pracha-uthi","url":"../../../assets/interior/interior_mantana/"},
    {"type":"1","img":"../../../assets/interior/interior_golden_Inn/รร ประตูน้ำ10.png","text":"Golden Inn","url":"../../../assets/interior/interior_golden_Inn/"},
    {"type":"1","img":"../../../assets/interior/interior_century_onnut/เชนจูรี่2.png","text":"Century Onnut","url":"../../../assets/interior/interior_century_onnut/"},
    {"type":"1","img":"../../../assets/interior/interior_asiatique/เอเชียทีค3.png","text":"Asiatique","url":"../../../assets/interior/interior_asiatique/"},
    {"type":"1","img":"../../../assets/interior/interior _bulakul/บลูลากูน4.png","text":"Blue Lagoont","url":"../../../assets/interior/interior _bulakul/"},
    {"type":"2","img":"../../../assets/3D/3D_clothShop/ร้านเสื้อผ้า1.png","text":"3D clothShop","url":"../../../assets/3D/3D_clothShop/"},
    {"type":"2","img":"../../../assets/3D/3D_coffeeShop/กาฬสิน1-1.png","text":"3D coffeeShop","url":"../../../assets/3D/3D_coffeeShop/"},
    {"type":"2","img":"../../../assets/3D/3D_factory/โรงงาน1.png","text":"3D factory","url":"../../../assets/3D/3D_factory/"},
    {"type":"2","img":"../../../assets/3D/3D_GrandAlpine/g12.png","text":"3D GrandAlpine","url":"../../../assets/3D/3D_GrandAlpine/"},
    {"type":"2","img":"../../../assets/3D/3D_Mantana/มัณฑนา2.png","text":"3D Mantana","url":"../../../assets/3D/3D_Mantana/"},
    {"type":"2","img":"../../../assets/3D/3D_MoonTower/MT2.png","text":"3D MoonTower","url":"../../../assets/3D/3D_MoonTower/"},
    {"type":"3","img":"../../../assets/construction/โกดังปากน้ำ/โกดัง1.png","text":"โกดังปากน้ำ","url":"../../../assets/construction/โกดังปากน้ำ/"},
    {"type":"4","img":"../../../assets/Decor-งานหิน/หิน@Mo-Mo-Paradise เซนทรัลเวิล/หิน momo1.png","text":"หิน Mo-Mo","url":"../../../assets/Decor-งานหิน/หิน@Mo-Mo-Paradise เซนทรัลเวิล/"},
    {"type":"4","img":"../../../assets/Decor-งานหิน/หิน@Rosewood/หิน-โรส2.png","text":"หิน Rosewood","url":"../../../assets/Decor-งานหิน/หิน@Rosewood/"},
    {"type":"4","img":"../../../assets/Decor-งานหิน/หิน@นิคมไฮเทค อยุธยา ปี62/หิน อยุธยา4.png","text":"หิน นิคมไฮเทค อยุธยา","url":"../../../assets/Decor-งานหิน/หิน@นิคมไฮเทค อยุธยา ปี62/"},
    {"type":"4","img":"../../../assets/Decor-งานหิน/หิน@โนเบิล คอนโด/หิน-โนเบิล4.png","text":"หิน โนเบิล คอนโด","url":"../../../assets/Decor-งานหิน/หิน@โนเบิล คอนโด/"},
    {"type":"4","img":"../../../assets/Decor-งานหิน/หิน@รพ.พญาไท2/หิน พญาไท3.png","text":"หิน รพ.พญาไท2","url":"../../../assets/Decor-งานหิน/หิน@รพ.พญาไท2/"},
    {"type":"4","img":"../../../assets/Decor-งานหิน/หิน@โรงพยาบาลเปาโล สมุทรปราการ/หิน เปาโล1.png","text":"หิน โรงพยาบาลเปาโล","url":"../../../assets/Decor-งานหิน/หิน@โรงพยาบาลเปาโล สมุทรปราการ/"},
    {"type":"4","img":"../../../assets/Decor-งานหิน/หิน@ศูนย์มะเร็งศรีราชา/หิน ศรี3.png","text":"หิน ศูนย์มะเร็งศรีราชา","url":"../../../assets/Decor-งานหิน/หิน@ศูนย์มะเร็งศรีราชา/"},
    {"type":"4","img":"../../../assets/Decor-งานหิน/หิน@ออฟฟิศ เชนทรัลเวิล/หิน-เชนทรัล2.png","text":"หิน ออฟฟิศ เชนทรัลเวิล","url":"../../../assets/Decor-งานหิน/หิน@ออฟฟิศ เชนทรัลเวิล/"},
    {"type":"4","img":"../../../assets/Decor-tile/กระเบื้องยาง@Luxury Clinic ปี63/2.png","text":"กระเบื้องยาง Luxury Clinic","url":"../../../assets/Decor-tile/กระเบื้องยาง@Luxury Clinic ปี63/"},
    {"type":"4","img":"../../../assets/Decor-tile/กระเบื้องยาง@สำนักงาน-ลาซาล/1.png","text":"กระเบื้องยาง สำนักงาน-ลาซาล","url":"../../../assets/Decor-tile/กระเบื้องยาง@สำนักงาน-ลาซาล/"},
    {"type":"4","img":"../../../assets/Decor-tile/กระเบื้องยาง@เซ็นจูรี่ เดอะมูฟวี่ พลาซ่า/1.png","text":"กระเบื้องยาง เซ็นจูรี่ เดอะมูฟวี่ พลาซ่า","url":"../../../assets/Decor-tile/กระเบื้องยาง@เซ็นจูรี่ เดอะมูฟวี่ พลาซ่า/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่าน+วอล@ธนาคารออมสิน/1.png","text":"ม่าน+วอล ธนาคารออมสิน","url":"../../../assets/Decor-wallpeper/ม่าน+วอล@ธนาคารออมสิน/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่าน+วอล@ห้องรับรอง รับเสด็จ รร. นานาชาติ ปี62/รับรอง3.png","text":"ม่าน+วอล ห้องรับรอง รับเสด็จ รร. นานาชาติ","url":"../../../assets/Decor-wallpeper/ม่าน+วอล@ห้องรับรอง รับเสด็จ รร. นานาชาติ ปี62//"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่าน+วอลเด็ก@รพ.พญาไท 2/วอลเด็ก พญาไท2-4.png","text":"ม่าน+วอลเด็ก@รพ.พญาไท 2","url":"../../../assets/Decor-wallpeper/ม่าน+วอลเด็ก@รพ.พญาไท 2/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่าน@บ้านคุณแพร ลาดกระบัง/บ้านคุณแพร1.png","text":"ม่านบ้าน","url":"../../../assets/Decor-wallpeper/ม่าน@บ้านคุณแพร ลาดกระบัง/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่าน@รพ/ม่านรพ.1.png","text":"ม่าน โรงพยาบาล","url":"../../../assets/Decor-wallpeper/ม่าน@รพ/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่าน@สำนักงาน บ.MUI รับเบอร์/MUI-1.png","text":"ม่าน สำนักงาน บ.MUI","url":"../../../assets/Decor-wallpeper/ม่าน@สำนักงาน บ.MUI รับเบอร์/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่าน@หมู่บ้าน Inizio ปิ่นเกล้า-ศาลายา/inzศาลายา2.png","text":"ม่าน หมู่บ้าน Inizio ปิ่นเกล้า-ศาลายา","url":"../../../assets/Decor-wallpeper/ม่าน@หมู่บ้าน Inizio ปิ่นเกล้า-ศาลายา/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่าน@เสือใหญ่/เสือใหญ่2.png","text":"ม่าน เสือใหญ่","url":"../../../assets/Decor-wallpeper/ม่าน@เสือใหญ่/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่านจีบ+ผ้าบุผนัง@ห้องประชุม ศาลากลาง จ.อุทัยธานี ปี63/ผ้าบุ งานอุทัย1.png","text":"ม่านจีบ+ผ้าบุผนัง ห้องประชุม ศาลากลาง จ.อุทัยธานี","url":"../../../assets/Decor-wallpeper/ม่านจีบ+ผ้าบุผนัง@ห้องประชุม ศาลากลาง จ.อุทัยธานี ปี63/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@คอนโด Knightsbridge พระราม3/ม่านKB1.png","text":"ม่านจีบ+วอล@คอนโด Knightsbridge","url":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@คอนโด Knightsbridge พระราม3/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@ไอดีโอ2 บางนา ทั้งตึก A-B ปี62/ม่าน ไอดีโอ7.png","text":"ม่านจีบ+วอล@ไอดีโอ2 บางนา","url":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@ไอดีโอ2 บางนา ทั้งตึก A-B ปี62/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่านจีบ@Glasshouse/ม่านกราส4.png","text":"ม่านจีบ Glasshouse","url":"../../../assets/Decor-wallpeper/ม่านจีบ@Glasshouse/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่านจีบ@คอนโด ยูดีไล์ ท่าพระ/ม่านยูดีไล3.png","text":"ม่านจีบ@คอนโด ยูดีไล์","url":"../../../assets/Decor-wallpeper/ม่านจีบ@คอนโด ยูดีไล์ ท่าพระ/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่านม้วน sunscreen @สนง บ. AMpd/ม่านม้วนAM4.png","text":"ม่านม้วน sunscreen AMpd","url":"../../../assets/Decor-wallpeper/ม่านม้วน sunscreen @สนง บ. AMpd/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/ม่านม้วน แบล็คเฮ้า@ศูนย์มะเร็งศรีราชา/ม่านม้วน-ศรี3.png","text":"ม่านม้วน แบล็คเฮ้า ศูนย์มะเร็งศรีราชา","url":"../../../assets/Decor-wallpeper/ม่านม้วน แบล็คเฮ้า@ศูนย์มะเร็งศรีราชา/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/วอล @ รพ.พญาไท2/วอลพญาไท1.png","text":"วอล  รพ.พญาไท2","url":"../../../assets/Decor-wallpeper/วอล @ รพ.พญาไท2/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/วอล หัวเตียง-รอบห้อง @โรงแรมคาร์ลตัน กรุงเทพฯ สุขุมวิท/วอลคาตัล5.png","text":"วอล หัวเตียง โรงแรมคาร์ลตัน","url":"../../../assets/Decor-wallpeper/วอล หัวเตียง-รอบห้อง @โรงแรมคาร์ลตัน กรุงเทพฯ สุขุมวิท/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/วอล@Grand Mercure Hotel/วอล Mer3.png","text":"วอล Grand Mercure Hotel","url":"../../../assets/Decor-wallpeper/วอล@Grand Mercure Hotel/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/วอล@The Grand Rama-II/วอล พระราม2-1.png","text":"วอล@The Grand Rama-II","url":"../../../assets/Decor-wallpeper/วอล@The Grand Rama-II/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/วอล@ธ.ออมสิน สาขา ถนนเพชรบุรี/วอล ออมสิน1.png","text":"วอล ธ.ออมสิน สาขา ถนนเพชรบุรี","url":"../../../assets/Decor-wallpeper/วอล@ธ.ออมสิน สาขา ถนนเพชรบุรี/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/วอล@รพ.กรุงเทพ-พิษณุโลก/วอลพิดโลก7.png","text":"วอล รพ.กรุงเทพ-พิษณุโลก","url":"../../../assets/Decor-wallpeper/วอล@รพ.กรุงเทพ-พิษณุโลก/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/วอล@ร้านอาหาร@สิงห์ คอมเพล็ก/วอล สิง2.png","text":"วอล ร้านอาหาร สิงห์ คอมเพล็ก","url":"../../../assets/Decor-wallpeper/วอล@ร้านอาหาร@สิงห์ คอมเพล็ก/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/วอล@สำนักงานให้เช่า @กิ่งแก้ว/วอล สนง.3.png","text":"วอล สำนักงานให้เช่า กิ่งแก้ว","url":"../../../assets/Decor-wallpeper/วอล@สำนักงานให้เช่า @กิ่งแก้ว/"},
    {"type":"4","img":"../../../assets/Decor-wallpeper/วอล@หอพระ ศูนย์ราชการ/วอล หอพระ1.png","text":"วอล หอพระ ศูนย์ราชการ","url":"../../../assets/Decor-wallpeper/วอล@หอพระ ศูนย์ราชการ/"},
  ]
  constructor() { }
  
  ngOnInit(): void {
    this.loadScript();
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
}

