import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { FacilityComponent } from "./facility/facility.component";

const routes:Routes=[
    {
        path:'',
        redirectTo:'facility'
    },
    {
        path:'facility',
        component:FacilityComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class FacilityRoutingModule{}