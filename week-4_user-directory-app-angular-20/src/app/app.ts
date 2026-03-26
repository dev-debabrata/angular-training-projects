import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Loader } from './components/loader/loader';
import { RouterOutlet } from '@angular/router';
import { UserLists } from './components/user-lists/user-lists';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
