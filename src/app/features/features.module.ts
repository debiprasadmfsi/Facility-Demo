import { NgModule } from "@angular/core";
import { ShareModule } from "../shared/share.module";
import { FacilityRoutingModule } from "./features-routing.module";
import { FacilityComponent } from "./facility/facility.component";
import { FacilityTableComponent } from "./facility/facility-table/facility-table.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@NgModule({
    imports: [
        FacilityRoutingModule,
        ShareModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        FacilityComponent,
        FacilityTableComponent,
        FacilityTableComponent
    ],
    exports: []
})
export class FacilityModule {

}