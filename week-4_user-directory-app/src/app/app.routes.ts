import { Routes } from '@angular/router';
import { Users } from './components/users/users';
import { UserDetails } from './components/users/user-details/user-details';

export const routes: Routes = [
  { path: '', component: Users },
  { path: 'user/:id', component: UserDetails },
  { path: '**', redirectTo: '' },

  //   {
  //     path: '',
  //     loadComponent: () => import('./components/user-lists/user-lists').then((m) => m.UserLists),
  //   },
  //   {
  //     path: 'users/:id',
  //     loadComponent: () =>
  //       import('./components/user-lists/user-detail/user-detail').then((m) => m.UserDetail),
  //   },
  //   {
  //     path: 'loader',
  //     loadComponent: () => import('./components/loader/loader').then((m) => m.Loader),
  //   },
  //   { path: '**', redirectTo: '' },
];
