import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css']
})
export class FeedbackCreateComponent implements OnInit {
  
  pname:string;
  feedback:string;

  constructor(private feedbackService: FeedbackService) {
    this.pname='';
    this.feedback='';
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.feedbackService.submit(this.pname,this.feedback);
    this.pname='';
    this.feedback='';
  }
}
