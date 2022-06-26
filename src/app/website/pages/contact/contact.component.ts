import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RedSocial } from 'src/models/red-social.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    tel: [""]
  });

  rrss: RedSocial[] = [
    {
      name: "GitHub",
      url: "https://github.com/JuamBer",
      icon: "fa-brands fa-github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/juamber/",
      icon: "fa-brands fa-linkedin"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/juamber/",
      icon: "fa-brands fa-instagram"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/JuanSaezGarcia",
      icon: "fa-brands fa-twitter"
    },
    {
      name: "StackOverflow",
      url: "https://stackoverflow.com/users/8794462/juamber?tab=profile",
      icon: "fa-brands fa-stack-overflow"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCnwQce1OREgFG9Mve5oHlMg/playlists?view_as=subscriber",
      icon: "fa-brands fa-youtube"
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private router: Router
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
  }

  goTo(url: string){
    this.router.navigateByUrl(url);
  }

}
