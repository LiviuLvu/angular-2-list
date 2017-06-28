import { Component } from "@angular/core";

@Component({
  selector: 'vote-taker',
  template: `
    <h2>Question for vote simulation</h2>
    <p>Poll results will show here, after all votes are done</p>
    <h3 *ngIf="result">Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <my-voter *ngFor="let voter of voters"
      [name]="voter"
      (onVoted)="onVoted($event)">
    </my-voter>
  `
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Bach', 'Tchaikovsky', 'Beethoven', 'Stravinsky'];
  result: boolean = false;

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
    if (this.agreed + this.disagreed === this.voters.length) {
      this.result = true;
    }
  }

}