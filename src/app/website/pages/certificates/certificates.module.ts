import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificatesComponent } from './certificates.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    CertificatesComponent,
  ],
  imports: [
    CommonModule,
    CertificatesRoutingModule,
    PipesModule
  ]
})
export class CertificatesModule { }
