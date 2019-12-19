// Angular
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';



// Forms Component
import {FormsComponent} from './forms.component';

import {SwitchesComponent} from './switches.component';


// Carousel Component
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CarouselsComponent} from './carousels.component';

// Collapse Component
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {CollapsesComponent} from './collapses.component';

// Dropdowns Component
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

// Pagination Component
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {PopoversComponent} from './popovers.component';

// Popover Component
import {PopoverModule} from 'ngx-bootstrap/popover';
import {PaginationsComponent} from './paginations.component';


// Components Routing
import {BaseRoutingModule} from './base-routing.module';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [
    FormsComponent,
    SwitchesComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent
  ]
})
export class BaseModule {
}
