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
    console.log(history.state.navigationId);
    
    if(history.state.navigationId != 1){
      this.imageDetail = history.state;
      localStorage.setItem("dataDetail",JSON.stringify(this.imageDetail))
    }else{
      this.imageDetail = JSON.parse(localStorage["dataDetail"]);
    }
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
