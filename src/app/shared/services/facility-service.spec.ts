import { FACILITYES } from "../mock/factlity.mock";
import { OFFSET, PAGE_INDEX } from "../mock/pagination.mock";
import { FacilityResults } from "../models/facility.model";
import { FacilityService } from "./facility.service";

describe('FacilityService',()=>{
    let facilityService:FacilityService;
    let facilites: FacilityResults[] = FACILITYES;
    let pageIndex = PAGE_INDEX;
    let offset = OFFSET;
    beforeEach(()=>{

        facilityService = new FacilityService();

    });

    it("Should Paginate the list",()=>{
        let result = facilityService.paginate(facilites,pageIndex,offset);
        expect(result.length).toBe(offset);
        expect(result).toEqual(facilites.slice(0,offset));
    });
    it("Should serch facility from list",()=>{
        let facility = facilites[0];
        let search = facilityService.search(facilites,facility.facility_name);
        expect(search).toContain(facility)
    })
    it('Should return empty  search ',()=>{
        let search = facilityService.search(facilites,"N?A");
        expect(search).toEqual([]);
    });
    it('Should sort List ',()=>{
        let result = facilityService.sort('asc','total_number_of_beds',facilites);
        expect(result[0].total_number_of_beds).toEqual(1);
    });

})