import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificatesComponent } from './certificates.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';


@NgModule({
  declarations: [
    CertificatesComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    CertificatesRoutingModule
  ]
})
export class CertificatesModule { }
