import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-facility-filters',
  templateUrl: './facility-filters.component.html',
  styleUrls: ['./facility-filters.component.scss']
})
export class FacilityFiltersComponent implements OnInit {
  filterForm!: FormGroup;
  constructor(private dialogRef: MatDialogRef<FacilityFiltersComponent>) { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      zip_code: new FormControl('',Validators.required),
      range:new FormControl(0)
    })
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  getFilterData():void{
    let filterData:{zip_code:number,range:number} = this.filterForm.value;
    let range =filterData.zip_code+filterData.range;
    this.dialogRef.close({range:range})

  }

}
