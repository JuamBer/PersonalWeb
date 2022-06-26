import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  constructor(
    private translateService: TranslateService
  ) {
    translateService.use('en')
  }

  ngOnInit(): void {
  }

  downloadCV() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/cv.pdf');
    link.setAttribute('download', 'cv.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
