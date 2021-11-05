import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css']
})
export class NewObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   const newObservable$ = new Observable<Number>((observer)=>{
    // for (let i = 0; i <= 5; i++) {
    //   observer.next(i);
    // }
    // observer.complete();
    // observer.next(1000);
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.complete();
   })
   let observer = {next: (data: number) => console.log(data), 
  error: error =>console.log(error), complete: () =>console.log("completed")};

  newObservable$.subscribe(observer)
  }


}
