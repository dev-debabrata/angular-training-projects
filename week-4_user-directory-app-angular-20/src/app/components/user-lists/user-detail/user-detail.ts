import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, delay, Observable, of, tap } from 'rxjs';

import { UserService } from '../../../services/user.service';
import { Loader } from '../../loader/loader';
import { Error } from '../../error/error';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, Loader, Error],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);

  loading = true;
  error = false;

  // user$!: Observable<User | null>;
  users: User | null = null;

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUserById(userId).subscribe({
      next: (res) => {
        this.loading = false;
        this.users = res;
      },
      error: (err) => {
        this.error = true;
        this.loading = false;
      },
    });

    // this.user$ = this.userService.getUserById(userId).pipe(
    //   delay(1500),
    //   tap(() => {
    //     this.loading = false;
    //   }),
    //   catchError(() => {
    //     this.error = true;
    //     this.loading = false;
    //     return of(null);
    //   }),
    //   // delay(1000),
    //   // catchError((err) => {
    //   //   console.error(err);
    //   //   this.error = true;
    //   //   return of(null);
    //   // }),
    //   // finalize(() => {
    //   //   this.loading = false;
    //   // })
    // );
  }
}

// private route = inject(ActivatedRoute);
// private userService = inject(UserService);

// loading = true;
// error = false;
// // user: any = null;
// user$!: Observable<any>;
// //  user$!: any;

// ngOnInit() {
//   const userId = Number(this.route.snapshot.paramMap.get('id'));

//   this.loading = true;
//   this.error = false;

//   this.user$ = this.userService.getUserById(userId).pipe(
//     catchError(() => {
//       this.error = true;
//       return of(null);
//     }),
//   );
//   setTimeout(() => {
//     this.loading = false;
//   }, 2000);
// }

// private route = inject(ActivatedRoute);
// private userService = inject(UserService);

// loading = true;
// error = false;

// userId = Number(this.route.snapshot.paramMap.get('id'));
// user$ = this.userService.getUserById(this.userId).pipe(
//   catchError(() => {
//     this.error = true;
//     return of(null);
//   }),
//   finalize(() => {
//     setTimeout(() => {
//       this.loading = false;
//     }, 1000);
//   }),
// );
