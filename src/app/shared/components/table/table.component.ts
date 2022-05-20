import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { FacilityResults } from '../../models/facility.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() set listData(data: FacilityResults[]) { this.dataSource.data = data; }
  @Input() displayedColumns: string[] = [];
  @Input() columnNames: string[]=[];
  @Output() show:EventEmitter<FacilityResults> = new EventEmitter();
  dataSource = new MatTableDataSource();
  showDetails(data:FacilityResults)
  {
    this.show.emit(data);
  }
}
