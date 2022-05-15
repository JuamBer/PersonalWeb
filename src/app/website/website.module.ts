import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ToolsComponent } from './components/tools/tools.component';


@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    AbilitiesComponent,
    LanguagesComponent,
    ToolsComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
