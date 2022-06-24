import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolsComponent } from '../../components/tools/tools.component';
import { ExperienceComponent } from '../../components/experience/experience.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToolsComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
