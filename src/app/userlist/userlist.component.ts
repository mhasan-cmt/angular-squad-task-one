import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule, UserprofileComponent],
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent {}
