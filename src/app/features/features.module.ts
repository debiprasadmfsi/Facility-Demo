import { NgModule } from "@angular/core";
import { ShareModule } from "../shared/share.module";
import { FacilityRoutingModule } from "./features-routing.module";
import { FacilityComponent } from "./facility/facility.component";
import { FacilityTableComponent } from "./facility/facility-table/facility-table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FacilityFiltersComponent } from './facility/facility-filters/facility-filters.component';
@NgModule({
    imports: [
        FacilityRoutingModule,
        ShareModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        FacilityComponent,
        FacilityTableComponent,
        FacilityTableComponent,
        FacilityFiltersComponent
    ],
    exports: []
})
export class FacilityModule {

}