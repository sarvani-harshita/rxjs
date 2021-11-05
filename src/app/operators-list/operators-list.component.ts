import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {distinct, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-operators-list',
  templateUrl: './operators-list.component.html',
  styleUrls: ['./operators-list.component.css']
})
export class OperatorsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ldakfj');
    of(1,2,3,4).pipe(
      map(value =>{
       return ajax('https://jsonplaceholder.typicode.com/posts/'+ value)
      })
    )
    .subscribe((posts) => {
      posts.subscribe((post1)=>{console.log(post1)})
      console.log(posts);
    })
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



}
