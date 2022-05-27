import { TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShareModule } from "src/app/shared/share.module";
import { FacilityFiltersComponent } from "./facility-filters.component";

describe('FacilityFiltersComponent', () => {
    let facilityFilterComponent: FacilityFiltersComponent;
    const dialogMock = {
        close: (param?:{range:string}) => { }
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ShareModule, ReactiveFormsModule, BrowserAnimationsModule],
            declarations: [FacilityFiltersComponent],
            providers: [
                { provide: MatDialogTitle, useValue: {} },
                { provide: MatDialogRef, useValue: dialogMock },
                { provide: MAT_DIALOG_DATA, useValue: [] }
            ]
        }).compileComponents();

    });
    beforeEach(() => {
        const fixture = TestBed.createComponent(FacilityFiltersComponent);
        fixture.detectChanges();
        facilityFilterComponent = fixture.componentInstance;
    })


    it('Should format distance label', () => {
        let result = facilityFilterComponent.formatLabel(2000);
        expect(result).toBe('2k');
    });
    it('Should send distance label', () => {
        let dialogSpy = spyOn(facilityFilterComponent.dialogRef, 'close').and.callThrough();
        facilityFilterComponent.filterForm.setValue({
            zip_code: '12345',
            range: 0
        })

        facilityFilterComponent.getFilterData();
        expect(dialogSpy).toHaveBeenCalled();
        expect(dialogSpy).toHaveBeenCalledTimes(1);
        expect(dialogSpy).toHaveBeenCalledOnceWith({range:'123450'});



    })
})