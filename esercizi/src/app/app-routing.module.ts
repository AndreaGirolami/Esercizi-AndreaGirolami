import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { OtherComponent } from './other/other.component';
import { DentroHomeComponent } from './home/dentro-home/dentro-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'dentroHome', component: DentroHomeComponent }],
  },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  {
    path: 'users',
    component: OtherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
