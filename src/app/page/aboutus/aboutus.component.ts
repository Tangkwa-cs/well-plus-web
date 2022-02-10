import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  imageRef = ["คลีนิค นิติพล.jfif","คลีนิค ลัคชัวรี่.png","คอนโด โนเบิล.png","คอนโด IVY.png",
"คอนโด the pillar condo.jfif","รพ.กรุงเทพ-พิดโลก.png","รพ.กรุงเทพ.jfif","รพ.เกษมราษฏร์.png","รพ.จุฬา.jfif",
"รพ.ธรรมศาตร์รังสิต.png","รพ.เปาโล สมุทรปราการ.png","รพ.เปาโล.jfif","รพ.พญาไท.png",
"รพ.มหาชัย2.png","รพ.มหาชัยเพชรรัตน์.jfif","รพ.ศิริราช.png","รพ.ศูนย์มะเร็งศรีราชา.png","รพ.สมิติเวช.png",
"รร.แกรนเมอเคียว แบงคอก.jfif","รร คอนราด.png","รร คาร์ตัน สุขุมวิท.png","รร.เชอราตัล สุขุมวิท33.png","รร.IVY จอมเทียน พัทยา.jfif",
"ร้านอาหาร MoMo เชนทรัลเวิล.png","โรงงาน ในนิคมอุตสาหกรรมไฮเทค อยุธยา.png","สนง. กิ่งแก้ว.jfif",
"สนง ตึกศิวาเทล สยามดิส.png","สนง ตึกสิงห์.jfif","หมู่บ้าน-คอนโด เครือ ศุภลัย.jfif","หมู่บ้าน คอนโด เครืออนันดา.png","หมู่บ้าน คาซ่าแกรนด์.png",
"หมู่บ้าน เครือ พฤกษา1.png","หมู่บ้าน เครือ พฤกษา.png","หมู่บ้าน เครือแลนแอนเฮ้า.png","หมู่บ้าน เครือ ศุภลัย.jfif","หมู่บ้าน เครือ แสนสิริ.png",
"หมู่บ้าน เครือ AP.png","หมู่บ้าน เครือ SCแอสเชส.png","หมู่บ้าน-พร็อพเพอตี้.jfif","หมู่บ้าน มัฑณนา.png","ห้างเชนจูรี่.jfif","ห้างเชนทรัล-ลาดพร้าว.jfif",
"ห้างเชนทรัลเวิล.png","ห้างทอง ตำหนักทอง5.jfif"];
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
