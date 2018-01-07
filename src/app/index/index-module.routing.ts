import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes)
    // other imports here
  ]
})
export class IndexModuleRouting { }
