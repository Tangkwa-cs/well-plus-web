import { Component, OnInit,ViewChild,ElementRef ,ChangeDetectorRef} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  project :any;
  projectDecorate :any;
  title :any;
  type:any;
  setActive = false;
  @ViewChild('rock') rock?: ElementRef
  @ViewChild('tile') tile?: ElementRef
  @ViewChild('wall') wall?: ElementRef
  imageProject1 = ['นิรัน1.png','นิรัน2.png','นิรัน3.png'];  
  imageProject2 = ['city1.png','city2.png','city3.png','city4.png','city5.png','city6.png','city7.png','city8.png','city9.png','city10.png','city11.png','city12.png']; 
  imageProject3 = ['สมคิด1.png','สมคิด2.png','สมคิด3.png','สมคิด4.png','สมคิด5.png','สมคิด6.png','สมคิด7.png','สมคิด8.png','สมคิด9.png','สมคิด10.png','สมคิด11.png','สมคิด12.png']; 
  imageProject4 = ['ivy1.png','ivy2.png','ivy3.png','ivy4.png','ivy5.png','ivy6.png','ivy7.png','ivy8.png','ivy9.png','ivy10.png','ivy11.png','ivy12.png','ivy13.png'];  
  imageProject5 = ['นานา1.png','นานา2.png','นานา3.png','นานา4.png','นานา5.png']; 
  imageProject6 = ['มัณ1.png','มัณ2.png','มัณ3.png','มัณ4.png','มัณ5.png','มัณ6.png','มัณ7.png','มัณ8.png','มัณ9.png','มัณ10.png','มัณ11.png','มัณ12.png','มัณ13.png','มัณ14.png','มัณ15.png','มัณ16.png']; 
  imageProject7 = ['ประตูน้ำ1.png','ประตูน้ำ2.png','ประตูน้ำ3.png','ประตูน้ำ4.png','ประตูน้ำ5.png','ประตูน้ำ6.png','ประตูน้ำ7.png','ประตูน้ำ8.png','ประตูน้ำ9.png','ประตูน้ำ10.png'];  
  imageProject8 = ['เชนจูรี่1.png','เชนจูรี่2.png','เชนจูรี่3.png','เชนจูรี่4.png','เชนจูรี่5.png','เชนจูรี่6.png'];  
  imageProject9 = ['เอเชียทีค1.png','เอเชียทีค2.png','เอเชียทีค3.png','เอเชียทีค4.png','เอเชียทีค5.png','เอเชียทีค6.png','เอเชียทีค7.png','เอเชียทีค8.png','เอเชียทีค9.png']; 
  imageProject10 = ['1.png','2.png','3.png','4.png']; 
  imageProject11 = ['ร้านเสื้อผ้า1.png','ร้านเสื้อผ้า2.png','ร้านเสื้อผ้า3.png'];  
  imageProject12 = ['กาฬสิน1-1.png','กาฬสิน1-2.png','กาฬสิน1-3.png','กาฬสิน1-4.png','กาฬสิน1-5.png','กาฬสิน1-6.png','กาฬสิน2-1.png','กาฬสิน2-2.png','กาฬสิน2-3.png','กาฬสิน2-4.png']; 
  imageProject13 = ['โรงงาน1.png','โรงงาน2.png','โรงงาน3.png','โรงงาน4.png','โรงงาน5.png','โรงงาน6.png','โรงงาน7.png','โรงงาน8.png','โรงงาน9.png','โรงงาน10.png','โรงงาน11.png','โรงงาน12.png','โรงงาน13.png','โรงงาน14.png','โรงงาน15.png']; 
  imageProject14 = ['g11.png','g12.png','g35.png','g36.png','g81.png','g82.png','g84.png','g85.png'];  
  imageProject15 = ['มัณฑนา1.png','มัณฑนา2.png','มัณฑนา3.png','มัณฑนา4.png','มัณฑนา5.png']; 
  imageProject16 = ['MT1.png','MT2.png','MT3.png','MT4.png','MT5.png']; 
  imageProject17 = ['โกดัง1.png','โกดัง2.png','โกดัง3.png'];  
  imageProject18 = ['momo1.png','momo2.png','momo3.png','momo4.png','momo5.png']; 
  imageProject19 = ['หิน-โรส1.png','หิน-โรส2.png']; 
  imageProject20 = ['หินอยุธยา1.png','หินอยุธยา2.png','หินอยุธยา3.png','หินอยุธยา4.png','หินอยุธยา5.png'];  
  imageProject21 = ['หิน-โนเบิล1.png','หิน-โนเบิล2.png','หิน-โนเบิล3.png','หิน-โนเบิล4.png','หิน-โนเบิล5.png','หิน-โนเบิล6.png','หิน-โนเบิล7.png','หิน-โนเบิล8.png','หิน-โนเบิล10.png','หิน-โนเบิล11.png','หิน-โนเบิล12.png']; 
  imageProject22 = ['หินพญาไท1.png','หินพญาไท2.png','หินพญาไท3.png','หินพญาไท4.png']; 
  imageProject23 = ['หินเปาโล1.png','หินเปาโล2.png','หินเปาโล3.png','หินเปาโล4.png','หินเปาโล5.png','หินเปาโล6.png','หินเปาโล7.png','หินเปาโล8.png'];  
  imageProject24 = ['หินศรี1.png','หินศรี2.png','หินศรี3.png','หินศรี4.png','หินศรี5.png','หินศรี6.png']; 
  imageProject25 = ['หิน-เชนทรัล1.png','หิน-เชนทรัล2.png','หิน-เชนทรัล3.png']; 
  imageProject26 = ['1.png','2.png','3.png'];  
  imageProject27 = ['1.png','2.png','3.png','4.png']; 
  imageProject28 = ['1.png','2.png','3.png','4.png','5.png']; 
  imageProject29 = ['1.png','2.png','3.png','4.png','5.png','6.png','7.jpg','8.png'];  
  imageProject30 = ['รับรอง1.png','รับรอง2.png','รับรอง3.png']; 
  imageProject31 = ['วอลเด็กพญาไท2-1.png','วอลเด็กพญาไท2-2.png','วอลเด็กพญาไท2-3.png','วอลเด็กพญาไท2-4.png']; 
  imageProject32 = ['บ้านคุณแพร1.png','บ้านคุณแพร2.png','บ้านคุณแพร3.png','บ้านคุณแพร4.png','บ้านคุณแพร5.png','บ้านคุณแพร6.png'];  
  imageProject33 = ['ม่านรพ1.png','ม่านรพ2.png']; 
  imageProject34 = ['MUI-1.png']; 
  imageProject35 = ['inzศาลายา1.png','inzศาลายา2.png','inzศาลายา3.png'];  
  imageProject36 = ['เสือใหญ่1.png','เสือใหญ่2.png','เสือใหญ่3.png','เสือใหญ่4.png']; 
  imageProject37 = ['ผ้าบุงานอุทัย1.png','ผ้าบุงานอุทัย2.png','ผ้าบุงานอุทัย3.png','ม่านงานอุทัย1.png','ม่านงานอุทัย2.png','ม่านงานอุทัย3.png','ม่านงานอุทัย4.png']; 
  imageProject38 = ['ม่านKB1.png','ม่านKB2.png','ม่านKB3.png','วอลKB1.png','วอลKB2.png','วอลKB3.png'];  
  imageProject39 = ['ม่านไอดีโอ1.png','ม่านไอดีโอ2.png','ม่านไอดีโอ3.png','ม่านไอดีโอ4.png','ม่านไอดีโอ5.png','ม่านไอดีโอ6.png','ม่านไอดีโอ7.png','วอลไอดีโอ1.png','วอลไอดีโอ2.png']; 
  imageProject40 = ['ม่านกราส1.png','ม่านกราส2.png','ม่านกราส3.png','ม่านกราส4.png']; 
  imageProject41 = ['ม่านยูดีไล1.png','ม่านยูดีไล2.png','ม่านยูดีไล3.png','ม่านยูดีไล4.png'];  
  imageProject42 = ['ม่านม้วนAM1.png','ม่านม้วนAM2.png','ม่านม้วนAM3.png','ม่านม้วนAM4.png']; 
  imageProject43 = ['ม่านม้วน-ศรี1.png','ม่านม้วน-ศรี2.png','ม่านม้วน-ศรี3.png','ม่านม้วน-ศรี4.png','ม่านม้วน-ศรี5.png']; 
  imageProject44 = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png'];  
  imageProject45 = ['วอล-คาตัล1.png','วอลคาตัล-2.png','วอลคาตัล-3.png','วอลคาตัล4.png','วอลคาตัล5.png']; 
  imageProject46 = ['วอลMer1.png','วอลMer2.png','วอลMer3.png','วอลMer4.png','วอลMer5.png','วอลMer6.png']; 
  imageProject47 = ['วอลพระราม2-1.png','วอลพระราม2-2.png','วอลพระราม2-3.png','วอลพระราม2-4.png','วอลพระราม2-5.png'];  
  imageProject48 = ['วอลออมสิน1.png','วอลออมสิน2.png','วอลออมสิน3.png','วอลออมสิน4.png','วอลออมสิน5.png']; 
  imageProject49 = ['วอลพิดโลก1.png','วอลพิดโลก2.png','วอลพิดโลก3.png','วอลพิดโลก4.png','วอลพิดโลก5.png','วอลพิดโลก6.png','วอลพิดโลก7.png']; 
  imageProject50 = ['วอลสิง1.png','วอลสิง2.png'];  
  imageProject51 = ['วอลสนง.1.png','วอลสนง.2.png','วอลสนง.3.png']; 
  imageProject52 = ['วอลหอพระ1.png','วอลหอพระ2.png']; 

  imageFilter = [
    {"id":1,"type":"INTERIOR","img":"../../../assets/interior/interior_wall_nirunville/นิรัน3.png","text":"Interior ผนังลอฟ บ้านพักอาศัย","url":"../../../assets/interior/interior_wall_nirunville/",
      "detail":"เป็นงานสกิมผนังบ้าน ตามใจลูกค้าหัวใจลอฟ","year":"2562","place":"มบ.นิรันดร์วิลล์16 The city"},
    {"id":2,"type":"INTERIOR","img":"../../../assets/interior/interior_thecity/city10.png","text":"Interior &Furniture บ้านพักอาศัย @The city","url":"../../../assets/interior/interior_thecity/",
      "detail":"งานออกแบบบ้านพักอาศัยโทนสีโรสโกลด์ตามที่ลูกค้าชื่นชอบ เฟอร์นิเจอร์ด้านล่างจะออกโทนสีชมพู งานผนัง สูง7เมตรต่อเนื่องถึงชั้น2 เป็นหินธรรมชาติที่ต่อลายกันต่อเนื่อง ตัดกับสแตนเลสอย่างลงตัวและสวยงาม","year":"2564","place":"มบ. The city สวนผัก"},
    {"id":3,"type":"INTERIOR","img":"../../../assets/interior/interior_somkidroom/สมคิด3.png","text":"Interior ที่พักอาศัยห้องชุด","url":"../../../assets/interior/interior_somkidroom/",
      "detail":"เป็นงานปรับปรุงห้องพักอาศัยพร้อมเดินระบบ น้ำ-ไฟฟ้าใหม่หมด ส่วนงานเฟอร์นิเจอร์บิวท์อิน ออกแบบโทนสีขาว เพื่อดูโปร่งและสบายตา เน้นเฟอร์ที่จำเป็นต่อการใช้งาน ให้ห้องดูโล่ง ไม่อึดอัดจนเกินไป","year":"2563","place":"คอนโด อาคารสมคิด เพลส ปทุมวัน"},
    {"id":4,"type":"INTERIOR","img":"../../../assets/interior/interior_pataya/ivy7.png","text":"Interior @ ห้องตัวอย่าง คอนโด IVY พัทยา","url":"../../../assets/interior/interior_pataya/",
      "detail":"เป็นงานตกแต่งภายในตามแบบของลูกค้า  เน้นโชว์ลายเรียบหรูจากลิเมตปิดผิวบิวท์อิน และติดตั้งกระจกเงากับผนังสูง เพื่อให้ดูโปร่ง","year":"2564","place":"คอนโด IVY หาดจอมเทียน พัทยา"},
    {"id":5,"type":"INTERIOR","img":"../../../assets/interior/interior_nana/นานา5.png","text":"Interior @ร้าน SALIL HOTEL","url":"../../../assets/interior/interior_nana/",
      "detail":"เป็นงานตกแต่งร้านอาหารบาร์แอนด์เรสเตอรอง สไตล์ลอฟตั้งแต่พื้นจนถึงฝ้าพร้อมติดตั้งไฟส่องสว่างและไฟตกแต่งภายในทั้งหมด","year":"2563","place":"ซอยนานา สุขุมวิท"},
    {"id":6,"type":"INTERIOR","img":"../../../assets/interior/interior_mantana/มัณ3.png","text":"Interior @ มบ. มัณฑนา ประชาอุทิศ","url":"../../../assets/interior/interior_mantana/",
      "detail":"เป็นงานก่อสร้างและออกแบบภายในทั้งหมด โครงสร้างเป็นเหล็กกับปูน งานออกแบบสไตล์ลอฟผสมงานโมเดิร์น ภายในออกแบบเป็นบันไดวน ทำให้ใช้พื้นที่น้อย ฝ้า-เพดาน มีการเจาะช่องเพื่อรับแสงจากธรรมชาติได้เต็มที่ และเจาะช่องวอยซ์เพดาน เพื่อให้บ้านดูสูงไม่อึดอัด","year":"2564","place":"ซอยนานา สุขุมวิท"},
    {"id":7,"type":"INTERIOR","img":"../../../assets/interior/interior_golden_Inn/ประตูน้ำ10.png","text":"Interior &Furniture @ โรงแรมโกลเด้นอินท์","url":"../../../assets/interior/interior_golden_Inn/",
      "detail":"เป็นงานปรับปรุงห้องพักให้เช่าใหม่ทั้งหมด เนื่องจากทรุดโทรมตามการใช้งาน เฟอนิเจอร์บิวท์อินเน้นการใช้งานที่ง่ายในพื้นที่ที่จำกัด","year":"2562","place":"ประตูน้ำ"},
    {"id":8,"type":"INTERIOR","img":"../../../assets/interior/interior_century_onnut/เชนจูรี่2.png","text":"Furniture @ ห้องทำงาน เซนจูรี่อ่อนนุช","url":"../../../assets/interior/interior_century_onnut/",
      "detail":"เป็นงานตกแต่งห้องทำงานผู้บริหาร โดยเน้นงานไม้ปิดผิวลามิเนตและมีช่องกระจกเพื่อไม่ให้ดูทึบจนเกินไป งานตู้โชว์เป็นงานปิดผิวลามิเนตและแผ่นทองเปลวลงบนผิวตัดกับสีดำ ดูหรูหราและลงตัวมากๆ","year":"2562","place":"เชนจูรี่ อ่อนนุช"},
    {"id":9,"type":"INTERIOR","img":"../../../assets/interior/interior_asiatique/เอเชียทีค3.png","text":"Interior @ ร้านอาหาร สวัสดี","url":"../../../assets/interior/interior_asiatique/",
      "detail":"งานออกแบบร้านอาหาร ที่เน้นวัสดุรอบๆตัวมาตกแต่งร้าน ใช้แผ่นเมมัลชีทมาทำผนัง ปูพื้นด้วยกระเบื้องยาง ใช้เหล็กตาข่ายมาทำฝ้าและเพดาน ใช้ต้นไม้ ดอกไม้ เทียมมาตกแต่งร้านโดยเลือกสีสรรให้ใกล้เคียงกับธรรมชาติมากที่สุด","year":"2564","place":"เอเชียทีค"},
    {"id":10,"type":"INTERIOR","img":"../../../assets/interior/interior_bulakul/4.png","text":"Interior&Furniture บ้านพักอาศํย @ มบ.บลูลากูน","url":"../../../assets/interior/interior_bulakul/",
      "detail":"เป็นงานออกแบบที่ผสมผสานระหว่างเฟอนิเจอร์เก่าและเฟอนิเจอร์ใหม่ เจ้าของบ้านเป็นชาวต่างชาติที่ชอบงานไม้ วัสดุและสี เน้นธรรมชาติหรือเลียนแบบสีธรรมชาติให้มากที่สุด","year":"2561","place":"มบ. บลูลากูน บางนา"},

    {"id":11,"type":"Interior-3D","img":"../../../assets/3D/3D_clothShop/ร้านเสื้อผ้า1.png","text":"งานออกแบบ ร้านขายเสื้อผ้า","url":"../../../assets/3D/3D_clothShop/",
      "detail":"งานออกแบบร้านขายเสื้อผ้า โดยปรับบ้านพักอาศัยบางส่วนมาทำเป็น Showroom สไตล์ลอฟเน้นชั้นโชว์ที่ดูโล่ง ในพื้นที่ที่จำกัด","year":"2562","place":"สวนหลวง กทม."},
    {"id":12,"type":"Interior-3D","img":"../../../assets/3D/3D_coffeeShop/กาฬสิน1-1.png","text":"งานออกแบบ ร้านกาแฟ","url":"../../../assets/3D/3D_coffeeShop/",
      "detail":"งานออกแบบร้านกาแฟ&เบเกอรี่ ใจกลาง จ.กาฬสินธุ พื้นที่ร้านอยู่ชั้น1 ของโรงแรม การออกแบบโทนสีและตกแต่ง ให้โดดเด่น เป็นที่จดจำ และดึงดูดความน่าสนใจของผู้คนที่ผ่านไป","year":"2564","place":"อ.เมือง จ.กาฬสินธุ์"},
    {"id":13,"type":"Interior-3D","img":"../../../assets/3D/3D_factory/โรงงาน1.png","text":"งานออกแบบ โรงงานและออฟฟิศ","url":"../../../assets/3D/3D_factory/",
      "detail":"งานออกแบบโรงงานในคอนเช็ปที่ ต้องดูไม่ให้เป็นโรงงานมากไป ให้ดูแล้วผ่อนคลายเหมือนอยู่บ้าน และต้องมีโชนสีเขียวไว้ผ่อนคลายและพักสายตา","year":"2562","place":"เทพารักษ์ สมุทรปราการ"},
    {"id":14,"type":"Interior-3D","img":"../../../assets/3D/3D_GrandAlpine/g12.png","text":"งานออกแบบ ล๊อปปี้ โรงแรม แกรนด์ อัลไพน์","url":"../../../assets/3D/3D_GrandAlpine/",
      "detail":"งานออกแบบภายในล็อปปี้ เนื่องจากโครงสร้างเดิมที่ทรุดโทรมและเตี้ยมาก การออกแบบเน้นความหรูหรา และแบ่งโชนการใข้งาน การพักคอยที่ชัดเจน","year":"-","place":"โรงแรมแกรนด์ อัลไพน์ ประตูน้ำ"},
    {"id":15,"type":"Interior-3D","img":"../../../assets/3D/3D_Mantana/มัณฑนา2.png","text":"งานออกแบบ หมู่บ้านมัณฑนา ประชาอุทิศ","url":"../../../assets/3D/3D_Mantana/",
      "detail":"เป็นงานออกแบบในคอนเช็ป 'บ้านที่ดูไม่เหมือนบ้าน' เน้นหน้าต่างรอบบ้าน เพื่อรับแสงจากธรรมชาติ ส่วนภายในเน้นการพักผ่อน ฟังเพลง ดูหนัง และโซนนั่งเล่น","year":"2563","place":"หมู่บ้านมัณฑนา ประชาอุทิศ"},
    {"id":16,"type":"Interior-3D","img":"../../../assets/3D/3D_MoonTower/MT2.png","text":"งานออกแบบ ที่พักอาศัย Moon Tower","url":"../../../assets/3D/3D_MoonTower/",
      "detail":"งานออกแบบ ปรับปรุงที่พักอาศัย จากเดิมที่ทรุดโทรมจากการใข้งาน เน้นออกแบบใหม่ให้ดูทันสมัย ให้ใช้งานทุกพื้นที่ในห้องครบทุกมุม","year":"2563","place":"คอนโด Moon Tower สุขุมวิท"},

    {"id":17,"type":"CONSTRUCTION","img":"../../../assets/construction/โกดังปากน้ำ/โกดัง1.png","text":"งานก่อสร้าง โกดัง ","url":"../../../assets/construction/โกดังปากน้ำ/",
      "detail":"งานออกแบบและก่อสร้างโกดัง เก็บอะไหล่รถต์ คอนเช็ปการออกแบบเป็นโกดังกึ่งโรงงาน 2ชั้น โดยใช้โครงสร้างเหล็กทั้งหมด วัสดุผนังและหลังคาเป็นเมทัลชีท เดินระบบไฟร้อยท่อ EMT เพื่อความปลอดภัย","year":"2563","place":"ซอยมิตรไมตรี จ.สมุทรปราการ"},
    
    {"id":18,"type":"rock","img":"../../../assets/Decor-งานหิน/หิน@Mo-Mo-Paradiseเซนทรัลเวิล/momo1.png","text":"หิน MO-MO PARADISE","url":"../../../assets/Decor-งานหิน/หิน@Mo-Mo-Paradiseเซนทรัลเวิล/",
      "detail":"หินเทียมสีดำ มีเกล็ดทองเล็กน้อย ทำให้ดูสวยงามล่อกับแสงไฟ งานเจียเข้ารูปตามแบบดีไชน์เคาน์เตอร์","year":"2563","place":"เชนทรัลเวิล"},
    {"id":19,"type":"rock","img":"../../../assets/Decor-งานหิน/หิน@Rosewood/หิน-โรส2.png","text":"หิน ROSEWOOD","url":"../../../assets/Decor-งานหิน/หิน@Rosewood/",
      "detail":"งานหินเคาน์เตอร์ประชาสัมพันธ์ ใช้หินอ่อนธรรมชาติอลาเนสกาโต้ ต่อลาย","year":"2562","place":"โรงแรมโรสวูด กรุงเทพ"},
    {"id":20,"type":"rock","img":"../../../assets/Decor-งานหิน/หิน@นิคมไฮเทคอยุธยา/หินอยุธยา4.png","text":"งานหิน นิคมไฮเทค อยุธยา","url":"../../../assets/Decor-งานหิน/หิน@นิคมไฮเทคอยุธยา/",
      "detail":"งานหินเทียมสีขาวติดตั้งเคาน์เตอร์ประชาสัมพันธ์และงานหินแกรนิตติดตั้งเคาน์เตอร์ห้องน้ำทั้งชายและหญิงในโรงงานนิคมอุตสาหกรรมไฮเทค","year":"2562","place":"นิคมไฮเทค อยุธยา"},
    {"id":21,"type":"rock","img":"../../../assets/Decor-งานหิน/หิน@โนเบิลคอนโด/หิน-โนเบิล4.png","text":"หิน โนเบิล คอนโด","url":"../../../assets/Decor-งานหิน/หิน@โนเบิลคอนโด/",
      "detail":"งานหินเทียมสีครีม เคาน์เตอร์ชุดครัวในตัวและหินเทียมสีขาวเคาน์เตอร์อ่างล้างหน้าในห้องน้ำ","year":"2562","place":"โนเบิลคอนโด ซอยร่วมฤดู"},
    {"id":22,"type":"rock","img":"../../../assets/Decor-งานหิน/หิน@รพ.พญาไท2/หินพญาไท3.png","text":"หิน รพ. พญาไท2","url":"../../../assets/Decor-งานหิน/หิน@รพ.พญาไท2/",
      "detail":"ท๊อปเคาน์เตอร์ด้านหน้าใช้หินอ่อนครีมมาเฟล โทนสีน้ำตาล ส่วนเคาน์เตอร์ใช้งานด้านในใช้หินเทียมไวน์วีนัส","year":"2563","place":"โรงพยาบาล พญาไท2"},
    {"id":23,"type":"rock","img":"../../../assets/Decor-งานหิน/หิน@โรงพยาบาลเปาโลสมุทรปราการ/หินเปาโล1.png","text":"หิน โรงพยาบาล เปาโล สมุทรปราการ","url":"../../../assets/Decor-งานหิน/หิน@โรงพยาบาลเปาโลสมุทรปราการ/",
      "detail":"หินเทียมลายไววีนัส ลายเส้นออกสีน้ำตาลอ่อน ดูสะอาดตาและเรียบร้อย ทนต่อการใช้งาน","year":"2563","place":"โรงพยาบาล เปาโล สมุทรปราการ"},
    {"id":24,"type":"rock","img":"../../../assets/Decor-งานหิน/หิน@ศูนย์มะเร็งศรีราชา/หินศรี3.png","text":"หิน ศูนย์มะเร็ง ศรีราชา","url":"../../../assets/Decor-งานหิน/หิน@ศูนย์มะเร็งศรีราชา/",
      "detail":"หินเทียมลายไววีนัส ใช้ทั้งเคาน์เตอร์ประชาสัมพันธ์และเคาน์เตอร์ลงทะเบียนแต่ละแผนก","year":"2562","place":"โรงพยาบาลศูนย์มะเร็ง ศรีราชา"},
    {"id":25,"type":"rock","img":"../../../assets/Decor-งานหิน/หิน@ออฟฟิศเชนทรัลเวิล/หิน-เชนทรัล2.png","text":"หิน ออฟฟิศ เชนทรัลเวิล","url":"../../../assets/Decor-งานหิน/หิน@ออฟฟิศเชนทรัลเวิล/",
      "detail":"หินเทียมสีขาว ดูสะอาด ติดตั้งบนท๊อปเคาน์เตอร์ตัวยาวตัดกับผนังสีแดง สวยงามลงตัวมากๆ","year":"2562","place":"เซนทรัลเวิล"},
  
    {"id":26,"type":"tile","img":"../../../assets/Decor-tile/กระเบื้องยาง@LuxuryClinic/2.png","text":"กระเบื้องยาง Luxury Clinic","url":"../../../assets/Decor-tile/กระเบื้องยาง@LuxuryClinic/",
      "detail":"กระเบื้องยาง","year":"2563","place":"เซนทรัลเวิล"},
    {"id":27,"type":"tile","img":"../../../assets/Decor-tile/กระเบื้องยาง@สำนักงาน-ลาซาล/1.png","text":"กระเบื้องยาง สำนักงาน","url":"../../../assets/Decor-tile/กระเบื้องยาง@สำนักงาน-ลาซาล/",
      "detail":"กระเบื้องยางพร้อมติดตั้ง งานพื้นเป็นรุ่นคลิ๊กล๊อก และงานติดตั้งส่วนบันไดเป็นรุ่นทากาว","year":"2562","place":"ซอยลาซาล"},
    {"id":28,"type":"tile","img":"../../../assets/Decor-tile/กระเบื้องยาง@เซ็นจูรี่/1.png","text":"กระเบื้องยาง เซนจูรี่ เดอะมูฟวี่ พลาซ่า","url":"../../../assets/Decor-tile/กระเบื้องยาง@เซ็นจูรี่/",
      "detail":"กระเบื้องยางรุ่นทากาว","year":"2563","place":"เซนทรัลเวิล"},
    
      {"id":29,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่าน+วอล@ธนาคารออมสิน/1.png","text":"งานม่าน+วอล ธ.ออมสิน","url":"../../../assets/Decor-wallpeper/ม่าน+วอล@ธนาคารออมสิน/",
      "detail":"ผลงานติดตั้งม่านปรับแสงและวอลเปเปอร์ผนังรอบห้องทำงานทั้งม่านและวอลเปเปอร์ เลือกใช้โทนสีเย็นแบบเรียบง่าย ให้ความรู้สึกสุภาพ สงบและสบายตา","year":"2561","place":"ธ.ออมสิน สาขาสมุทรสาคร"},
    {"id":30,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่าน+วอล@ห้องรับรองรับเสด็จ/รับรอง3.png","text":"งานม่าน+วอล ห้องรับรอง","url":"../../../assets/Decor-wallpeper/ม่าน+วอล@ห้องรับรองรับเสด็จ//",
      "detail":"ม่านหลุยที่เน้นทักษะการเย็บที่ปราณีต สีสันที่เป็นเอกลักษณะเฉพาะตัว ส่วนงานวอลเปเปอร์ ลายไทย ติดตั้งด้วยทีมงานมืออาชีพ","year":"2562","place":"รร. นานาชาติ ย่านอุดมสุข"},
    {"id":31,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่าน+วอลเด็ก@รพ.พญาไท2/วอลเด็กพญาไท2-4.png","text":"ม่าน+วอลเด็ก รพ.พญาไท2","url":"../../../assets/Decor-wallpeper/ม่าน+วอลเด็ก@รพ.พญาไท2/",
      "detail":"วอลเปเปอร์ลายอิฐสีขาว ตัดกับดีไซน์ที่เน้นสีสรร สำหรับเด็กโดยเฉพาะ","year":"2562","place":"แผนกเด็ก รพ.พญาไท2"},
    {"id":32,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่าน@บ้านคุณแพรลาดกระบัง/บ้านคุณแพร1.png","text":"ม่านและมู่ลี่ บ้านพักอาศัย","url":"../../../assets/Decor-wallpeper/ม่าน@บ้านคุณแพรลาดกระบัง/",
      "detail":"บ้านพักอาศัยที่ปรับปรุงใหม่ และติดตั้งผ้าม่านใหม่ทั้งหลัง  งานผ้าม่านจะตัดเย็บเป็นม่านลอน รางไข่ปลาติดตั้งในหลุมฝ้า ทำให้ดูเรียบร้อย โทนสีอ่อนเพื่อง่ายต่อการจัดเฟอร์นิเจอร์อื่นๆ ส่วนมู่ลี่ไม้ ติดตั้งในห้องครัวเพื่อง่ายต่อการใช้งานและทำความสะอาด","year":"2564","place":"บ้านพักอาศัย ซ.ลาดกระบัง16"},
    {"id":33,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่าน@รพ/ม่านรพ1.png","text":"ม่านโรงพยาบาล รพ.พญาไท2","url":"../../../assets/Decor-wallpeper/ม่าน@รพ/",
      "detail":"ผ้าม่านโรงพยาบาลตัดเย็บตามรูปแบบเฉพาะการใช้งานในโรงพยาบาลเป็นหลักโดยส่วนบนจะเป็นผ้าตาข่ายและต่อด้วยผ้าทึบ","year":"2561","place":"รพ.พญาไท2"},
    {"id":34,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่าน@สำนักงานบ.MUI/MUI-1.png","text":"ม่านสำนักงาน บ.MUI","url":"../../../assets/Decor-wallpeper/ม่าน@สำนักงานบ.MUI/",
      "detail":"โชนพักผ่อนในสำนักงาน ลูกค้าเลือกใช้ผ้าทึบแบบแบล็คเอ้าท์ป้องกันแสงแดดเข้าได้อย่างดี สีผ้าม่านโทนสว่างทำให้ห้องดูเรียบแต่หรูและสบายตา","year":"2563","place":"สำนักงาน บ.เอ็มยูไอ รับเบอร์"},
    {"id":35,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่าน@หมู่บ้านInizioปิ่นเกล้า-ศาลายา/inzศาลายา2.png","text":"ม่าน หมู่บ้าน Inizio ปิ่นเกล้า-ศาลายา","url":"../../../assets/Decor-wallpeper/ม่าน@หมู่บ้านInizioปิ่นเกล้า-ศาลายา/",
      "detail":"บ้านพักอาศัยหลังนี้ ลูกค้าเลือกแบบผ้าม่านทั้งผ้าทึบและผ้าโปร่งโทนสีน้ำตาล เข้ากับสีเฟอนิเจอร์ได้อย่างลงตัว ผ้าม่านโซนชั้นล่างตัดเย็บแบบจีบ ส่วนห้องนอนชั้นบนตัดเย็บแบบม่านพับ","year":"2562","place":"หมู่บ้าน Inizio ปิ่นเกล้า-ศาลายา"},
    {"id":36,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่าน@เสือใหญ่/เสือใหญ่2.png","text":"ม่าน บ้านพักอาศัย ซ.เสือใหญ่","url":"../../../assets/Decor-wallpeper/ม่าน@เสือใหญ่/",
      "detail":"บ้านพักอาศัยหลังนี้ ลูกค้าเลือกใช้ผ้าม่านที่มีลายในตัวทั้งหมด ผ้าม่านในห้องรับรองและห้องนั่งเล่นจะตัดเย็บแบบม่านจีบ ส่วนบริเวณโถงบันไดสูงจะตัดเย็บแบบม่านหลุย และม่านพับ ติดตั้งบริเวณหน้าต่างรับแสงตรงบันได ","year":"2561","place":"ซ. เสือใหญ่อุทิศ (รัชภาภิเษก36)"},
    {"id":37,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่านจีบ+ผ้าบุผนัง@ห้องประชุมศาลากลางจ.อุทัยธานีปี63/ผ้าบุงานอุทัย1.png","text":"ม่านจีบ ผ้าบุผนัง ห้องประชุมศาลากลาง จ.อุทัยธานี","url":"../../../assets/Decor-wallpeper/ม่านจีบ+ผ้าบุผนัง@ห้องประชุมศาลากลางจ.อุทัยธานีปี63/",
      "detail":"ลูกค้าเลือกใช้ผ้าทึบและผ้าโปร่ง ตัดเย็บแบบม่านจีบ ใช้รางโชว์รวมถึงอุปกรณ์อื่นๆของแบรนด์VCทั้งหมด โทนผ้าสีเข้ม ตัดกับผนังห้องสีอ่อน ทำให้ดูโดดเด่น  ส่วนผ้าบุผนังติดตั้งและตัดเส้นด้วยกรุยเชิงสีเข้มได้อย่างลงตัว","year":"2563","place":"ห้องประชุมสุพรรณิกา ศาลากลาง จ.อุทัยธานี"},
    {"id":38,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@คอนโดKnightsbridgeพระราม3/ม่านKB1.png","text":"ม่านจีบ+วอล Knightsbridge","url":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@คอนโดKnightsbridgeพระราม3/",
      "detail":"เนื่องจากหน้าต่างมีความสูงถึง 4เมตร ทำให้แสงเข้ามาได้เยอะและอาจจะยากต่อการทำความสะอาด จึงแนะนำผ้ากัน UV ชนิดไม่อมฝุ่นให้กับลูกค้า เพื่อช่วยลดแสงและ ช่วยรักษาสุขภาพ ลูกค้าได้อีกด้วย อุปกรณ์รางก็ใช้เป็นระบบเชือกดึง ให้ง่ายต่อการใช้งานเปิด-ปิด","year":"2563","place":"KNIGHTSBRIDGE PRIME SATHORN"},
    {"id":39,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@ไอดีโอ2บางนาทั้งตึกA-Bปี62/ม่านไอดีโอ7.png","text":"ม่าน+วอล ไอดีโอ2 บางนา","url":"../../../assets/Decor-wallpeper/ม่านจีบ+วอล@ไอดีโอ2บางนาทั้งตึกA-Bปี62/",
      "detail":"ทั้งผ้าทึบและผ้าโปร่ง ตัดเย็บแบบม่านจีบ รางม่านตัดโค้งตามแบบของหน้าต่างบ้านใหญ่ของคอนโดทั้ง 2ห้องเลือกโทนสีต่างกันตามความชอบของลูกค้า  ส่วนงานวอลเปเปอร์ติดตั้งผนังโชว์บริเวณที่ดูทีวีและฝั่งห้องรับประทานอาหาร","year":"2562","place":"คอนโด ไอดีโอ2 บางนา"},
    {"id":40,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่านจีบ@Glasshouse/ม่านกราส4.png","text":"ม่านจีบ Glasshouse","url":"../../../assets/Decor-wallpeper/ม่านจีบ@Glasshouse/",
      "detail":"เมื่อลูกค้าให้โจทย์ว่าต้องการจัดมุมนั่งเล่นเพื่อวันแห่งการพักผ่อน และอยากให้แสงจากภายนอก เข้ามาเพียงเล็กน้อย #Wellplusdecor จึงนำเสนอม่านจีบสีขาวผ้าทอลายในตัว มีเท็กซ์เจอร์ให้มิติที่สวยงาม ลดแสงจ้าจากภายนอก ให้ความสว่างภายในกำลังดี ดูนุ่มนวล สบายตา","year":"2564","place":"บ้านพักอาศัย มบ. ชวนชื่น"},
    {"id":41,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่านจีบ@คอนโดยูดีไล์ท่าพระ/ม่านยูดีไล3.png","text":"ม่านจีบ คอนโด ยูดีไลน์ ท่าพระ","url":"../../../assets/Decor-wallpeper/ม่านจีบ@คอนโดยูดีไล์ท่าพระ/",
      "detail":"พื้นที่ในส่วนห้องนอน ลูกค้าเลือกใช้ม่านจีบผ้าDimout โทนสีเข้ม เพื่อช่วยลดแสงจากภายนอก และในส่วนห้องครัว เลือกใช้มู่ลี่ไม้ ซึ่งง่ายต่อการใช้งานและทำความสะอาด","year":"2562","place":"คอนโด ยูดีไลน์ ตลาดพลู ท่าพระ"},
    {"id":42,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่านม้วนsunscreen@สนงบ.AMpd/ม่านม้วนAM4.png","text":"ม่านม้วน SunScreen บ.AMPD","url":"../../../assets/Decor-wallpeper/ม่านม้วนsunscreen@สนงบ.AMpd/",
      "detail":"ลูกค้าเลือกใช้ม่านม้วนกันแดดแบบSunScreen ซึ่งเวลาปิดม่านลงมาแล้ว สามารถลดแสง แต่ยังคงมองเห็นวิวข้างนอกได้ และเมื่อเก็บม่านม้วนขึ้น ก็ดูเรียบร้อยไม่เปลืองพื้นที่","year":"2564","place":"สำนักงาน บ.AMPD"},
    {"id":43,"type":"wall","img":"../../../assets/Decor-wallpeper/ม่านม้วนแบล็คเฮ้า@ศูนย์มะเร็งศรีราชา/ม่านม้วน-ศรี3.png","text":"ม่านม้วน ศูนย์มะเร็ง ศรีราชา","url":"../../../assets/Decor-wallpeper/ม่านม้วนแบล็คเฮ้า@ศูนย์มะเร็งศรีราชา/",
      "detail":"ลูกค้าเลือกใช้ม่านม้วนแบบแบล็คเอ้าท์ โทนสีอ่อน สะดวกต่อการใช้งานและง่ายต่อการทำความสะอาด","year":"2563","place":"ศูนย์มะเร็ง ศรีราชา จ.ชลบุรี"},
    {"id":44,"type":"wall","img":"../../../assets/Decor-wallpeper/วอล@รพ.พญาไท2/2.png","text":"วอล  รพ.พญาไท2","url":"../../../assets/Decor-wallpeper/วอล@รพ.พญาไท2/",
      "detail":"วอลเปเปอร์หลังผ้า โทนสีครีมอ่อน ดูสุภาพ ตัดกับกรุยเชิงสแตนเลสสีทอง สร้างความหรูหราเป็นอย่างมาก การติดตั้งวอลเปเปอร์กับกรุยเซิงต้องอาศัยฝีมือและประสบการณ์จากช่างที่ชำนาญเก็บรายละเอียดและจบงานได้อย่างลงตัวและสวยงาม","year":"2562","place":"รพ.พญาไท2"},
    {"id":45,"type":"wall","img":"../../../assets/Decor-wallpeper/วอลหัวเตียง-รอบห้อง@โรงแรมคาร์ลตันกรุงเทพฯสุขุมวิท/วอลคาตัล5.png","text":"วอล หัวเตียง รร.คาร์ลตัล","url":"../../../assets/Decor-wallpeper/วอลหัวเตียง-รอบห้อง@โรงแรมคาร์ลตันกรุงเทพฯสุขุมวิท/",
      "detail":"งานติดตั้งวอลเปเปอร์หัวเตียง เป็นงานวอลสั่งพิมพ์ลาย การติดตั้งต้องอาศัยช่างมืออาชีพ เพราะต้องต่อลวดลายให้ต่อเนื่องและเรียบเนียน","year":"2562","place":"รร. คาร์ลตัล กรุงเทพ"},
    {"id":46,"type":"wall","img":"../../../assets/Decor-wallpeper/วอล@GrandMercureHotel/วอลMer3.png","text":"วอล Grand Mercure Hotel","url":"../../../assets/Decor-wallpeper/วอล@GrandMercureHotel/",
      "detail":"งานติดตั้งวอลเปเปอร์หลังผ้า บนผนังและหลังตู้เฟอร์นิเจอร์ไม้ การติดตั้งค่อนข้างทำงานยากและใช้เวลานาน ช่างติดตั้งต้องต่อลายอย่างปราณีตและเก็บรายละเอียดแนวรอยต่อให้เรียบร้อย","year":"2562","place":"Grand Mercure Hotel"},
    {"id":47,"type":"wall","img":"../../../assets/Decor-wallpeper/วอล@TheGrandRama-II/วอลพระราม2-1.png","text":"วอล The Grand Rama II","url":"../../../assets/Decor-wallpeper/วอล@TheGrandRama-II/",
      "detail":"งานติดตั้งวอลเปเปอร์บริเวณเพดานในหลุมฝ้า และผนังรอบห้อง งานนี้ค่อนใช้เวลานานเพราะใช้ความปราณีตในการเก็บรายละเอียดตามหลุมฝ้าทุกจุด","year":"2562","place":"หมู่บ้าน The Grand Rama II"},
    {"id":48,"type":"wall","img":"../../../assets/Decor-wallpeper/วอล@ธ.ออมสินสาขาถนนเพชรบุรี/วอลออมสิน1.png","text":"วอล ธนาคารออมสิน","url":"../../../assets/Decor-wallpeper/วอล@ธ.ออมสินสาขาถนนเพชรบุรี/",
      "detail":"ผลงานติดตั้งวอลเปเปอร์ในร่องไม้ เป็นอีกงานที่ต้องอาศัยความชำนาญและพิถีพิถันของทีมช่าง","year":"2562","place":"วอล ธนาคารออมสิน สาขา เพชรบุรี"},
    {"id":49,"type":"wall","img":"../../../assets/Decor-wallpeper/วอล@รพ.กรุงเทพ-พิษณุโลก/วอลพิดโลก7.png","text":"วอล รพ.กรุงเทพ พิษณุโลก","url":"../../../assets/Decor-wallpeper/วอล@รพ.กรุงเทพ-พิษณุโลก/",
      "detail":"วอลเปเปอร์ติดผนังลายน่ารักสำหรับเด็ก ทำให้เด็กๆชอบ สนใจและรู้สึกผ่อนคลายเมื่อต้องไปโรงพยาบาล","year":"2561","place":"รพ.กรุงเทพ-พิษณุโลก"},
    {"id":50,"type":"wall","img":"../../../assets/Decor-wallpeper/วอล@ร้านอาหาร@สิงห์คอมเพล็ก/วอลสิง2.png","text":"วอล ร้านอาหาร","url":"../../../assets/Decor-wallpeper/วอล@ร้านอาหาร@สิงห์คอมเพล็ก/",
      "detail":"งานติดตั้งวอลเปเปอร์ผนังโดยรอบและหน้าเคาน์เตอร์ร้านอาหารและเบเกอรี่ ทำให้ดูแปลกตาและส่วยงามกว่าทาสีธรรมดามาก","year":"2562","place":"อาคาร สิงหคอมเพล็ก"},
    {"id":51,"type":"wall","img":"../../../assets/Decor-wallpeper/วอล@สำนักงานให้เช่า@กิ่งแก้ว/วอลสนง.3.png","text":"วอลสำนักงานให้เช่า AXIOM","url":"../../../assets/Decor-wallpeper/วอล@สำนักงานให้เช่า@กิ่งแก้ว/",
      "detail":"ติดตั้งวอลเปเปอร์ผนังภายในทั้งหมด ลูกค้าเลือกโทนสีอ่อน ทำให้ดูกว้างและสบายตาอีกทั้งวอลสีอ่อนสามารถจัดเข้าชุดกับเฟอร์นิเจอร์ได้ง่ายกว่าโทนสีเข้ม","year":"2563","place":"AXIOM ถนนกิ่งแก้ว"},
    {"id":52,"type":"wall","img":"../../../assets/Decor-wallpeper/วอล@หอพระศูนย์ราชการ/วอลหอพระ1.png","text":"วอล หอพระ ศูนย์ราชการ","url":"../../../assets/Decor-wallpeper/วอล@หอพระศูนย์ราชการ/",
      "detail":"วอลเปเปอร์ลายไทย สร้างความโดดเด่น หรูหรา มีคุณค่า ให้กับสถานที่ที่ติดตั้งเป็นอย่างมากมองมุมไหน ก็มีความภูมิใจในศิลปะไทย สวยงามจริงๆ","year":"2564","place":"หอพระศูนย์ราชการ แจ้งวัฒนะ"},
  ];
  constructor(
    private router:Router,
    private rout :ActivatedRoute,
    private changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.rout.queryParams.subscribe((param:any)=>{
      this.title = param.title;
      this.type = param.type;
      console.log(this.type);
      
      if (param.title == "All project") {
        this.project = this.imageFilter;
      }else{
        this.project = this.imageFilter.filter(x =>x.type === param.title)
      }
    })
 
    if (this.title != "DECORATION") {
      this.router.navigate(
        ['/service'],
        { queryParams:  { title: this.title} }
      );
    }else{
      if(this.type == 'rock'){
        setTimeout(() => {
          this.rock?.nativeElement.click()
        }, 100);
     
        this.decorate(this.type);
      }else if(this.type == 'tile'){
        setTimeout(() => {
          this.tile?.nativeElement.click()
        }, 100);
  
        this.decorate(this.type);
      }else if(this.type == 'wall'){
        setTimeout(() => {
          this.wall?.nativeElement.click()
        }, 100);
        this.decorate(this.type);
      }
    }
    
    this.changeRef.detectChanges();
    this.loadScript();
  }
  ngOnChanges(): void {
    this.changeRef.detectChanges(); // typeScricp โหลดไม่ทัน html
  }
  decorate(title: any) {
    this.projectDecorate = this.imageFilter.filter(x =>x.type === title) 
    this.router.navigate(
      ['/service'],
      { queryParams:  { title: 'DECORATION',type :  title} }
    );
    
  }
  changeRoute(url:any,idProject:any,path:any,text:any,type:any){
    var temp = this.imageFilter.filter(x =>x.id === idProject) 
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
     this.router.navigate(
       [url], { state: { image: imageProject,path,text,type,idProject } });
       
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
