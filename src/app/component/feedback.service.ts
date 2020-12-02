import { Injectable } from  '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class FeedbackService {
    feedback=[]
    feedbackUpdated = new Subject();

    constructor(private http: HttpClient) { }

    submit(pname:string,feedback:string){
        const feedbackItem = {
            pname:pname,
            feedback:feedback
        }
        this.http.post<any>("http://localhost:3000/api/feedback/",feedbackItem)
            .subscribe(data => {
                this.feedback.push(data);
                this.feedbackUpdated.next([...this.feedback])
                console.log(data);
            })
    }

    getFeedback(){
        this.http.get<any>("http://localhost:3000/api/feedback/")
            .subscribe(data => {
                this.feedback = data;
                this.feedbackUpdated.next([...this.feedback]);
            })
    }

    getFeedbackUpdateListener():any{
        return this.feedbackUpdated.asObservable();
    }
}