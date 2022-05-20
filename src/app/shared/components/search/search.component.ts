import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filterTextChanged: Subject<string> = new Subject<string>();
  @Output() search: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  loadData(event: Event): void {

    let filterText = (event.target as HTMLInputElement).value;
    if (this.filterTextChanged.observers.length === 0) {
      this.filterTextChanged
        .pipe(debounceTime(1000), distinctUntilChanged())
        .subscribe(filterQuery => {
          this.search.emit(filterQuery.toLocaleLowerCase());
        });
    }
    this.filterTextChanged.next(filterText);
  }

}
