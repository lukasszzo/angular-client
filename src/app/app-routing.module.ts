
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { PostsComponent } from './posts/posts.component';
import { AddressComponent } from './address/address.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { HttpClientModule } from '@angular/common/http';

const routes : Routes = [
  {
    path: '',
    component: UsersComponent
  }, {
    path: 'details/:id',
    component: UserDetailsComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'address',
    component: AddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
