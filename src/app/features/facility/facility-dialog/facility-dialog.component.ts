import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FacilityResults } from '../../../shared/models/facility.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './facility-dialog.component.html',
  styleUrls: ['./facility-dialog.component.scss']
})
export class FacilityDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:FacilityResults) { }

  ngOnInit(): void {
  }

}
