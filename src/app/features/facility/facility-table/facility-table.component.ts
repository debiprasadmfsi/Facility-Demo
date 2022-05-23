import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FACILITY_DISPLAY_COLUMNS, FACILITY_TYPE } from 'src/app/shared/mock/factlity.mock';

import { FacilityResults } from '../../../shared/models/facility.model';

@Component({
  selector: 'app-table',
  templateUrl: './facility-table.component.html',
  styleUrls: ['./facility-table.component.scss']
})
export class FacilityTableComponent {
  @Input() set listData(data: FacilityResults[]) { this.dataSource.data = data; }
  displayedColumns: string[] = FACILITY_DISPLAY_COLUMNS;
  facilityTypes = FACILITY_TYPE;
  @Output() show: EventEmitter<FacilityResults> = new EventEmitter();
  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  dataSource = new MatTableDataSource();
  showDetails(data: FacilityResults) {
    this.show.emit(data);
  }
  sortData(event: Sort) {
    this.sort.emit(event);
  }
}
