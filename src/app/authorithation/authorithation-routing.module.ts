import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthorithationComponent} from './authorithation.component';

const routes: Routes = [
  {
    path: 'authorithation',
    component: AuthorithationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorithationRoutingModule {
}
