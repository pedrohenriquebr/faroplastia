import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output()
  search = new EventEmitter<string>();

  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(e:Event){
   if(e.target){
     console.log((e.target as HTMLInputElement).value);
     this.searchText = (e.target as HTMLInputElement).value;
     this.search.emit(this.searchText);
   }
  }

}
