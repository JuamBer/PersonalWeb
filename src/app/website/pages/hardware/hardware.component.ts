import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HardwareService } from 'src/app/services/hardware.service';
import { Hardware } from 'src/models/hardware.model.ts';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss']
})
export class HardwareComponent implements OnInit {

  items: Hardware[] = [];

  constructor(
    private hardwareService: HardwareService,
    private translateService: TranslateService
  ) {
    this.translateService.use('es');
  }

  ngOnInit(): void {
    this.hardwareService.getAll().subscribe(items => {
      this.items = items});
  }

}
