import { Injectable } from "@angular/core";
import { FacilityResults } from "../models/facility.model";

@Injectable({
    providedIn: 'root'
})
export class UtilityService {


    paginate(list: FacilityResults[], pageIndex: number, offset: number) {

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

    search(list: FacilityResults[], search: string): any {
        let serchData = list.filter((facility: FacilityResults) => {
            let facility_name: string = facility.facility_name.toLowerCase();
            let zip = facility.zip_code.toLowerCase();
            return facility_name.includes(search) || zip.includes(search);
        });
        return serchData;

    }

}