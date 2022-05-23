import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SearchComponent } from "./components/search/search.component";
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import { MatSortModule } from "@angular/material/sort";
@NgModule({
    imports:[
        CommonModule,
        MatTableModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatSelectModule,
        FormsModule,
        MatSortModule
    ],
    declarations:[
        SearchComponent
    ],
    exports:[
        MatTableModule,
        MatToolbarModule,
        SearchComponent,
        MatPaginatorModule,
        MatDialogModule,
        MatSelectModule,
        MatSortModule
    ],
    schemas:[NO_ERRORS_SCHEMA]
})
export class ShareModule{}