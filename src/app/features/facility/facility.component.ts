import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { FACILITYES, FACILITY_COLUMN_NAMES, FACILITY_DISPLAY_COLUMNS } from 'src/app/shared/mock/factlity.mock';
import { OFFSET, OFFSET_LIST, PAGE_INDEX } from 'src/app/shared/mock/pagination.mock';
import { FacilityResults } from 'src/app/shared/models/facility.model';
import { UtilityService } from 'src/app/shared/services/utility.service';


@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {
  pageIndex = PAGE_INDEX;
  offset = OFFSET;
  Facilitys: FacilityResults[] = FACILITYES;
  columnNames:string []=FACILITY_COLUMN_NAMES;
  displayedColumns:string []=FACILITY_DISPLAY_COLUMNS;
  pageSizeOption =OFFSET_LIST;

  dataSource: FacilityResults[] = [];

  constructor(private utilityService: UtilityService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showListData(this.Facilitys, this.pageIndex, this.offset);

  }
  showListData(listData: FacilityResults[], pageIndex: number, offset: number) {
    this.dataSource = this.utilityService.paginate(listData, pageIndex, offset);
  }

  searchFacility(event: string) {
    this.pageIndex = PAGE_INDEX;
    this.offset = OFFSET;
    console.log(event.length)
    if (event.length) {
      const serachData: FacilityResults[] = this.utilityService.search(this.Facilitys, event);
      this.showListData(serachData, this.pageIndex, this.offset);
    } else {
      this.showListData(this.Facilitys, this.pageIndex, this.offset);
    }

  }
  setPagination(event: PageEvent) {
    this.pageIndex = event.pageIndex + 1;
    this.offset = event.pageSize;
    this.showListData(this.Facilitys, this.pageIndex, this.offset);
  }
  displayFacilityDetails(event:FacilityResults)
  {
    this.dialog.open(DialogComponent, {
      data: event
    });
  }

}
