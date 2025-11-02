import { Component } from '@angular/core';
import { Users } from './users/users';

@Component({
  selector: 'app-dashboard',
  imports: [Users],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
