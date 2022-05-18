import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'hardware',
        loadChildren: () => import('./pages/hardware/hardware.module').then(m => m.HardwareModule),
      },
      {
        path: 'proyects',
        loadChildren: () => import('./pages/proyects/proyects.module').then(m => m.ProyectsModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
      },
      {
        path: 'certificates',
        loadChildren: () => import('./pages/certificates/certificates.module').then(m => m.CertificatesModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
