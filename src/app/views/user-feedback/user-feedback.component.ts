import { Component, OnInit } from '@angular/core';
import { User, UserFeedback } from '../../models/user';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.scss']
})
export class UserFeedbackComponent implements OnInit {
  userFeedback: UserFeedback;
  // userFeedback.ratings = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
