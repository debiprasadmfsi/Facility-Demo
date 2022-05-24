import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { FacilityDialogComponent } from 'src/app/features/facility/facility-dialog/facility-dialog.component';
import { FACILITYES } from 'src/app/shared/mock/factlity.mock';
import { OFFSET, OFFSET_LIST, PAGE_INDEX } from 'src/app/shared/mock/pagination.mock';
import { FacilityResults } from 'src/app/shared/models/facility.model';
import { FacilityService } from 'src/app/shared/services/facility.service';
import { SubSink } from 'subsink';
import { FacilityFiltersComponent } from './facility-filters/facility-filters.component';


@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit, OnDestroy {
  pageIndex = PAGE_INDEX;
  offset = OFFSET;
  Facilitys: FacilityResults[] = FACILITYES;
  pageSizeOption = OFFSET_LIST;
  subSink = new SubSink();
  dataSource: FacilityResults[] = [];

  constructor(private facilityService: FacilityService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.showListData(this.Facilitys, this.pageIndex, this.offset);

  }
  showListData(listData: FacilityResults[], pageIndex: number, offset: number) {
    this.dataSource = this.facilityService.paginate(listData, pageIndex, offset);
  }

  searchFacility(event: string) {
    this.resetPagination();
    if (event.length) {
      const serachData: FacilityResults[] = this.facilityService.search(this.Facilitys, event);
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
  displayFacilityDetails(event: FacilityResults) {
    this.dialog.open(FacilityDialogComponent, {
      data: event
    });
  }
  sortFacility(event: Sort) {
    this.resetPagination();
    const sortData: FacilityResults[] = this.facilityService.sort(event.direction, event.active, this.Facilitys);
    this.showListData(sortData, this.pageIndex, this.offset);
  }

  openFilterModel() {
    const dialogRef = this.dialog.open(FacilityFiltersComponent);
    this.subSink.sink = dialogRef.afterClosed().subscribe((data: { range: number }) => {

      if (data.range) {
        this.filterNearByFacility(data.range);
      }
    })
  }

  filterNearByFacility(range: number) {
    this.resetPagination();
    let filterData = this.facilityService.getNearByFacility(range, this.Facilitys);

    this.showListData(filterData, this.pageIndex, this.offset);
  }

  resetPagination(): void {
    this.pageIndex = PAGE_INDEX;
    this.offset = OFFSET;
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }


}
