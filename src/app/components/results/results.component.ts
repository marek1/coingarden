import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() coin: string;
  @Input() risk: number;

  constructor() { }

  ngOnInit(): void {
  }

}
