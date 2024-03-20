import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule, UserdetailsComponent],
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent {
  userName: string = 'Mahmudul Hasan';
}
