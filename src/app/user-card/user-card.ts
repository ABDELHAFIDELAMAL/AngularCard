import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input() username: string = '';
  @Input() age: number = 0;
  @Input() email: string = '';
  @Input({ required: true }) password: string = '';
}

