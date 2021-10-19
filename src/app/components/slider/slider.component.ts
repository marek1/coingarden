import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Risks } from '../../data/risks';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  risks = Risks;
  @Input() currentRisk: number = 0;
  @Output() newItemEvent = new EventEmitter<number>();
  value: number = 0;
  options: Options = {
    floor: this.risks[0].riskId,
    ceil: this.risks[this.risks.length - 1].riskId,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>" + this.risks[value].name + "</b>";
        case LabelType.High:
          return "<b>" + this.risks[value].name + "</b>";
        default:
          return this.risks[value].name;
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
    this.value = this.currentRisk;
  }

  valueChanged() {
    console.log('value : ', this.value);
    this.newItemEvent.emit(this.value);
  }

}
