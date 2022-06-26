import { Component, Input, OnInit } from '@angular/core';
import { RedSocial } from 'src/models/red-social.model';

@Component({
  selector: 'app-rrss',
  templateUrl: './rrss.component.html',
  styleUrls: ['./rrss.component.scss']
})
export class RRSSComponent implements OnInit {

  @Input() rrss: RedSocial[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
