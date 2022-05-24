import { Injectable } from "@angular/core";
import { FacilityResults } from "../models/facility.model";

@Injectable({
    providedIn: 'root'
})
export class FacilityService {


    paginate(list: FacilityResults[], pageIndex: number, offset: number): FacilityResults[] {

        const start =
            pageIndex === 1
                ? offset * (pageIndex - 1)
                : offset * (pageIndex - 1) + 1;
        const end =
            pageIndex === 1
                ? offset * pageIndex
                : offset * pageIndex + 1;
        let data =
            Math.floor(list.length / offset) >= pageIndex
                ? list.slice(start, end)
                : list.slice(offset * (pageIndex - 1));
        return data;

    }

    search(list: FacilityResults[], search: string): FacilityResults[] {
        let serchData = list.filter((facility: FacilityResults) => {
            let facility_name: string = facility.facility_name.toLowerCase();
            return facility_name.includes(search);
        });
        return serchData;

    }

    sort(type: string, key: string, list: FacilityResults[]): FacilityResults[] {
        list.sort((a, b) => {
            let x = a[key as keyof FacilityResults];
            let y = b[key as keyof FacilityResults];
            if (x < y) {
                return type === 'asc' ? -1 : 1;
            } else if (x > y) {
                return type === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return list;
    }

    getNearByFacility(range: number, list: FacilityResults[]): FacilityResults[] {


        let filterData = list.filter(facility => +facility.zip_code <= range);

        return filterData;

    }



}