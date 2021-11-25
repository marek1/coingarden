import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgxY2PlayerComponent, NgxY2PlayerOptions } from 'ngx-y2-player';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  @ViewChild('video') video: NgxY2PlayerComponent | undefined;
  @Input() videoId: any; // string or string array;

  playerOptions: NgxY2PlayerOptions = {
    height: 'auto', // you can set 'auto', it will use container width to set size
    width: 'auto',
    // when container resize, it will call resize function, you can custom this by set resizeDebounceTime, default is 200
    resizeDebounceTime: 0,
    playerVars: {
      autoplay: 0,
    },
    // aspectRatio: (3 / 4), // you can set ratio of aspect ratio to auto resize with
  };
  constructor() { }

  ngOnInit(): void {
  }

}
