import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SearchComponent } from "./components/search/search.component";
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
    imports:[
        CommonModule,
        MatTableModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatDialogModule
    ],
    declarations:[
        SearchComponent,
        TableComponent,
        DialogComponent,
        
        
    ],
    exports:[
        MatTableModule,
        MatToolbarModule,
        SearchComponent,
        DialogComponent,
        TableComponent,
        MatPaginatorModule,
        MatDialogModule
    ],
    schemas:[NO_ERRORS_SCHEMA]
})
export class ShareModule{}