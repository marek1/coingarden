import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Strategies } from '../../data/strategies';

@Component({
  selector: 'app-strategie',
  templateUrl: './strategie.component.html',
  styleUrls: ['./strategie.component.scss']
})
export class StrategieComponent implements OnInit {

  selectedStrategy: any;
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    // connect
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        let selectedStrategie = params.get('id')?.toString() || '';
        console.log('... ', selectedStrategie);
        this.selectedStrategy = Strategies.filter(strategie => {
          return strategie.int_url.toString() === selectedStrategie.toString()
        })[0];
      }
    })
  }


}
