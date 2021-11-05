import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'learn-rxjs';
  @ViewChild('outlet2', {static: false}) public outlet3

  arrObj = [
    {number: 1,data: 1}, 
    {number: 2,data: 2}, 
    {number: 3,data: 3}, 
    {number: 4,data: 4}, 
    {number: 5,data: 5}
  ]

  prom = new Promise<any>((resolve, reject) =>{
    setTimeout(() => {
      resolve("yeah done")
    },4000)
  })
promObservable$ = from(this.prom)
arrObjObservable$ = from(this.arrObj);

  constructor(){
    this.arrObjObservable$.subscribe((data) => {console.log(data);}, 
    error =>{console.log(error);}, ()=>{console.log("completed ");})

    this.promObservable$.subscribe((data) => {console.log(data);}, 
    error =>{console.log(error);}, ()=>{console.log("completed ");})
  }

  ngAfterViewInit() {
    fromEvent(document.getElementById('a-id'), 'click').subscribe((data) => {console.log(data);}, 
    error =>{console.log(error);}, ()=>{console.log("completed ");})
  }

  some(){
    console.log(this.outlet3.elementRef)

  }
}
