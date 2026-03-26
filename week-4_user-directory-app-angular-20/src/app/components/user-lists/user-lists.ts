import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { catchError, delay, of, Subscriber, tap } from 'rxjs';

import { Loader } from '../loader/loader';
import { Error } from '../error/error';
import { UserService } from '../../services/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-lists',
  standalone: true,
  imports: [Error, Loader, CommonModule, RouterModule],
  templateUrl: './user-lists.html',
  styleUrl: './user-lists.css',
})
export class UserLists implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService);

  loading = true;
  error = false;

  // users$ = of<User[]>([]);

  users: User[] = [];
  ngOnInit(): void {
    // console.log(this.user2);

    this.userService.getUsers().subscribe({
      next: (res) => {
        this.loading = false;
        this.users = res;
      },
      error: (err) => {
        this.error = true;
        this.loading = false;
        console.error(err);
      },
    });

    // this.userService.getUsers().subscribe(
    //   (res) => {
    //     this.loading = false;
    //     this.user2 = res;
    //     // console.log(this.user2);
    //   },
    //   (err) => {
    //     this.error = true;
    //     this.loading = false;
    //   },

    //   // catchError(() => {
    //   //   this.error = true;
    //   //   this.loading = false;
    //   //   return of([]);
    //   // }),
    // );
  }

  viewDetails(id: number): void {
    this.router.navigate(['/user', id]);
  }
}

// // constructor(private router: Router) {}

// // viewDetails(id: number) {
// //   this.router.navigate(['/user', id]);
// // }
// private router = inject(Router);
// private userService = inject(UserService);

// loading = true;
// error = false;

// users$ = this.userService.getUsers().pipe(
//   catchError(() => {
//     this.error = true;
//     this.loading = false;
//     return of([]);
//   }),
// );

// ngOnInit() {
//   setTimeout(() => {
//     this.loading = false;
//   }, 2000);
// }
// viewDetails(id: number) {
//   this.router.navigate(['/user', id]);
// }
