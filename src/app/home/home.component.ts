import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideMenu', [
      state('false', style({
        transform: 'translateX(-250px)'
      })),
      state('true', style({
        transform: 'translateX(0)'
      })),
      transition('true <=> false', animate('400ms ease-in-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  public isVisible: boolean;
  constructor() {
    this.isVisible = true;
  }

  ngOnInit() {

  }

  public onToggle(): void {
    console.log('Now it should slide');
    this.isVisible = !this.isVisible;
  }

}
