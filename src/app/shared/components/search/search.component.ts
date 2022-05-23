import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged } from 'rxjs';
import { SubSink } from 'subsink';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit ,OnDestroy{
  @Output() search: EventEmitter<string> = new EventEmitter();
  private subs = new SubSink();
  searchInput: FormControl = new FormControl()
  constructor() {

  }


  ngOnInit(): void {
    this.subs.sink =this.searchInput.valueChanges
    .pipe(debounceTime(1000), distinctUntilChanged())
    .subscribe((searchKey:string)=>{
      this.search.emit(searchKey);
    })

  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
