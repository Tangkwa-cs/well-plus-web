import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
imageFooter = ["กาฬสิน1-4.png","กาฬสิน1-6.png","เอเชียทีค3.png","เอเชียทีค4.png","MT1.png","MT2.png"];
  constructor() { } 

  ngOnInit(): void {
  }
  openImg(imageUrl:any){
    Swal.fire({
      imageUrl: "../../../assets/footer/"+imageUrl,
      imageWidth: 100+"%",
      imageHeight: "auto",
      showCloseButton:true,
      showConfirmButton:false,
      customClass:{
        closeButton:"background-color:red",
      },
      imageAlt: 'Custom image',
    })
  }

}
