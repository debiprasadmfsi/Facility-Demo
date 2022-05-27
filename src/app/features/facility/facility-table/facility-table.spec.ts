import { TestBed } from "@angular/core/testing"
import { first } from "rxjs";
import { FACILITYES } from "src/app/shared/mock/factlity.mock";
import { FacilityResults } from "src/app/shared/models/facility.model";
import { FacilityComponent } from "../facility.component"
import { FacilityTableComponent } from "./facility-table.component"

describe('FacilityTableComponent',()=>{
    let facilityTableComponent:FacilityTableComponent;
    let facilites: FacilityResults[];
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[FacilityComponent]
        });
        const fixture = TestBed.createComponent(FacilityTableComponent);
        facilityTableComponent = fixture.componentInstance;
        facilites = FACILITYES;
    });

    it('should trigger to display facility detail',()=>{
        facilityTableComponent.show.pipe(first()).subscribe((result)=>{
            console.log(result); 
            expect(result).toEqual(facilites[0]);
        })
        facilityTableComponent.showDetails(facilites[0]);

    });
    it('should trigger to sort facility detail',()=>{
        facilityTableComponent.sort.pipe(first()).subscribe((result)=>{ 
            expect(result).toEqual({direction:'asc',active:'facility_name'});
        })
        facilityTableComponent.sortData({direction:'asc',active:'facility_name'});

    })
})