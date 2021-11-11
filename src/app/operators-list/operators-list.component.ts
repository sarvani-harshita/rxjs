import { Component, OnInit } from '@angular/core';
import { interval, of, throwError, concat } from 'rxjs';
import { concatMap, delay, distinct, distinctUntilChanged, exhaustMap, filter, map, mergeMap, switchMap, take, tap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-operators-list',
  templateUrl: './operators-list.component.html',
  styleUrls: ['./operators-list.component.css']
})
export class OperatorsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // of(1,2,3,4).pipe(
    //   map(value =>{
    //    return ajax('https://jsonplaceholder.typicode.com/posts/'+ value)
    //   })
    // )
    // .subscribe((posts) => {
    //   posts.subscribe((post1)=>{console.log(post1)})
    //   console.log(posts);
    // })
  }

  distinctOperator(){
    of(1,2,3,4,5,5,4,3,2,1,3,4,5,6,4,7,8,9,4,3,5,6,8,9).pipe(distinct()).subscribe(data=> console.log(data))
  }

  distinctUntilChanged(){
    of(1,2,3,4,5,5,4,3,2,1,3,4,5,6,4,7,7,8,8,9,4,3,5,6,8,9).pipe(distinctUntilChanged()).subscribe(data=> console.log(data))
    // 1,2,3,4,5,4,3,2,1,3,4,5,6,4,7,8,9,4,3,5,6,8,9)
  }

  filterOperator(){
    of(1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,1,1,1,1,1,2,2,2,2,2,2,6,6,6,6,6,6,6).pipe(filter(x=>x>=3)).subscribe(data=> console.log(data));
  }

  ajaxOperator(){
    ajax('https://jsonplaceholder.typicode.com/posts').pipe().subscribe(data=> console.log(data));
  }
  MergeMapOpr(){
    of(1,2,3,4).pipe(
      mergeMap(value =>{
       return ajax('https://jsonplaceholder.typicode.com/posts/'+ value)
      })
    )
    .subscribe((posts) => {
      // posts.subscribe((post1)=>{console.log(post1)})
      console.log(posts.response);
    })
  }

  ConcatMapOpr(){
  of(1,2,3,4,5).pipe(
    delay(1500),
     concatMap(value =>{
      //  if(value == 2)
      //  throwError(()=> new Error('aifdlfd'))
      //  else
      return ajax('https://jsonplaceholder.typicode.com/posts/'+value)
      })
    )
    .subscribe((posts) => {
      // posts.subscribe((post1)=>{console.log(post1)})
      console.log(posts.response);
    },(err)=>{
      console.log(err);
    })

  //   interval(1000).pipe(
  //     mergeMap(x => x === 2
  //       ? throwError(`${x} value is 2`)
  //       : ajax('https://jsonplaceholder.typicode.com/posts/'+ x)
  //     ),
  //   ).subscribe(x => console.log(x), e => console.error(e));
  }

  ExhaustMap(){
    of(1,2,3,4,5,6,7,8,9).pipe(
      tap(i=> console.log(i)),
      map(x => {return x+1}),
      exhaustMap(value =>{
       return ajax('https://jsonplaceholder.typicode.com/posts/'+ value)
      }),
      take(5)
    )
    .subscribe((posts) => {
      // posts.subscribe((post1)=>{console.log(post1)})
      console.log(posts.response);
    })
  }

  SwitchMap(){
    of(1,2,3,4,5,6,7,8,9).pipe(
      tap(i=> console.log(i)),
      map(x => {return x+1}),
      switchMap(value =>{
       return ajax('https://jsonplaceholder.typicode.com/posts/'+ value)
      }),
      take(5)
    )
    .subscribe((posts) => {
      // posts.subscribe((post1)=>{console.log(post1)})
      console.log(posts.response);
    })
  }

  Concat(){
    let s1 = of(1,2,3,4,5);
    let s2 =  of('a','b','c','d','e');

    concat(s1,s2).subscribe((post1)=>{console.log(post1)})
  }

  Partition(){
    let observableValues = of(1, 2, 3, 4, 5, 6);
    // let op = partition(observableValues, (value) => value % 2 === 0);
  }

}
