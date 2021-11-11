import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { multicast, publish } from 'rxjs/operators';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  subject = new Subject();

  ngOnInit() {
    this.observe()
  }

  observe() {
    let observables = new Observable<number>(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.complete();
    })

    let observer1 = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification observer1'),
    };

    let observer2 = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification observer2'),
    };

    // observables.subscribe(observer1);
    // observables.subscribe(observer2);

    this.subject.subscribe(observer1);
    this.subject.subscribe(observer2);
    this.subject.next(2);
    this.subject.next(3);
    this.subject.next(4);
    this.subject.complete()
    // observables.subscribe(this.subject);
  }

  multicast(){
let int = interval(1000).pipe(publish());
int.subscribe(data=> console.log(data));
setTimeout(()=>{
int.subscribe(data=> console.log(data));
},2500)

  }

}
