import { Routes } from '@angular/router';
import { UserLists } from './components/user-lists/user-lists';
import { UserDetail } from './components/user-lists/user-detail/user-detail';

export const routes: Routes = [
  { path: '', component: UserLists },
  { path: 'user/:id', component: UserDetail },
];
