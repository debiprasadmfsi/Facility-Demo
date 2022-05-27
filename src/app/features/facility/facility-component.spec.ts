import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { MatDialog } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FACILITYES } from "src/app/shared/mock/factlity.mock";
import { OFFSET, PAGE_INDEX } from "src/app/shared/mock/pagination.mock";
import { FacilityResults } from "src/app/shared/models/facility.model";
import { FacilityService } from "src/app/shared/services/facility.service";
import { ShareModule } from "src/app/shared/share.module";
import { FacilityDialogComponent } from "./facility-dialog/facility-dialog.component";
import { FacilityComponent } from "./facility.component";

describe('FacilityComponent', () => {

    let facilityComponent: FacilityComponent;
    let pageIndex: number;
    let offset: number;
    let facilites: FacilityResults[];
    let facilityServiceMock:FacilityService;
    let matDialogMock:MatDialog;
    

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[ShareModule,BrowserAnimationsModule],
            declarations: [FacilityComponent],
            schemas:[CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();;

        const fixture = TestBed.createComponent(FacilityComponent);
        fixture.detectChanges();
        facilityServiceMock =TestBed.inject(FacilityService);
        matDialogMock=TestBed.inject(MatDialog);
        facilityComponent = fixture.componentInstance;
        pageIndex = PAGE_INDEX;
        offset = OFFSET;
        facilites = FACILITYES;

    });

    it("Should display facility", () => {
        let paginateSpy = spyOn(facilityServiceMock, 'paginate').and.callThrough();
        facilityComponent.showListData(facilites, pageIndex, offset);
        expect(paginateSpy).toHaveBeenCalled();
        expect(paginateSpy).toHaveBeenCalledWith(facilites, pageIndex, offset);
        expect(paginateSpy).toHaveBeenCalledTimes(1);
        expect(facilityComponent.dataSource.length).toBe(offset)
        expect(facilityComponent.dataSource).toEqual(facilites.slice(0, offset))



    });
    it("Should search facility", () => {

        let searchSpy = spyOn(facilityServiceMock, 'search').and.stub();
        let paginateSpy = spyOn(facilityServiceMock, 'paginate').and.stub();
        facilityComponent.searchFacility(facilites[0].facility_name);
        expect(searchSpy).toHaveBeenCalled();
        expect(searchSpy).toHaveBeenCalledTimes(1);
        expect(searchSpy).toHaveBeenCalledTimes(1);

    });
    it("Should reset search facility", () => {

        let spy = spyOn(facilityServiceMock, 'search').and.callThrough();
        facilityComponent.searchFacility("");
        expect(spy).toHaveBeenCalledTimes(0);
        expect(facilityComponent.dataSource.length).toBe(offset)

    });
    it("Should paginate Facility", () => {
        let paginateSpy = spyOn(facilityServiceMock, 'paginate').and.callThrough();
        facilityComponent.setPagination({ pageIndex: 0, pageSize: 5, length: facilites.length });
        expect(paginateSpy).toHaveBeenCalled()
        expect(paginateSpy).toHaveBeenCalledTimes(1);
        expect(paginateSpy).toHaveBeenCalledWith(facilites, 1, 5);

        expect(facilityComponent.dataSource.length).toBe(5);
        expect(facilityComponent.dataSource).toEqual(facilites.slice(0, 5))


    });
    it("Should display facility details", () => {
        let dialogSpy = spyOn(matDialogMock, 'open');
        facilityComponent.displayFacilityDetails(facilites[0]);
        expect(dialogSpy).toHaveBeenCalled();
        expect(dialogSpy).toHaveBeenCalledTimes(1);
        expect(dialogSpy).toHaveBeenCalledWith(FacilityDialogComponent,{data:facilites[0]})


    });
    it("Should sort facility", () => {
        let sortSpy = spyOn(facilityServiceMock, 'sort').and.callThrough();
        facilityComponent.sortFacility({direction:'asc',active:'facility_name'})
        expect(sortSpy).toHaveBeenCalledTimes(1);
        expect(sortSpy).toHaveBeenCalled();
        expect(sortSpy).toHaveBeenCalledWith('asc','facility_name',facilites);

    });
    it("Should search nearby facility", () => {
        const nearByFacilitySpy =spyOn(facilityServiceMock, 'getNearByFacility').and.callThrough();
        facilityComponent.filterNearByFacility(2000);
        expect(nearByFacilitySpy).toHaveBeenCalled();
        expect(nearByFacilitySpy).toHaveBeenCalledTimes(1);
        expect(nearByFacilitySpy).toHaveBeenCalledWith(2000,facilites);


    });
    it("Should reset pagination", () => {
       facilityComponent.resetPagination();
       expect(facilityComponent.pageIndex).toBe(pageIndex);
       expect(facilityComponent.offset).toBe(offset)
    });

})