import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
isHide:boolean=true;

modelImg:string=''

imgSrc:string[]=[
  './img/poert1.png',
  './img/port2.png',
  './img/port3.png',
  './img/port3.png',
  './img/port2.png',
  './img/poert1.png',
]

modelHide(eleEvent:EventTarget|null,eleSrc:HTMLImageElement):void{
if(eleEvent==eleSrc){
return;
}else{
  this.isHide=true;
}

}
}