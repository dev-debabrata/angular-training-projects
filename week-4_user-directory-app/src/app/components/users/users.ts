import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { catchError, of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Loader } from '../loader/loader';
import { Error } from '../error/error';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [Loader, Error, CommonModule, RouterModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  // constructor(private router: Router) {}

  // viewDetails(id: number) {
  //   this.router.navigate(['/user', id]);
  // }
  private router = inject(Router);
  private userService = inject(UserService);

  loading = true;
  error = false;

  users$ = this.userService.getUsers().pipe(
    catchError(() => {
      this.error = true;
      this.loading = false;
      return of([]);
    }),
  );

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  viewDetails(id: number) {
    this.router.navigate(['/user', id]);
  }
}
