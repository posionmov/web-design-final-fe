import {Component} from "@angular/core";

@Component({
  selector: 'videos',
  template: `
    <big-element-block>
      <div class="element-wrapper">
        <h1>Examples of our videos</h1>
        <div class="videos-wrapper">
          <video-element [videoId]="'UmlOkL2Loy4'"></video-element>
          <video-element [videoId]="'5Kb3mlUwwL0'"></video-element>
          <video-element [videoId]="'T2M9hSswlIs'"></video-element>
          <video-element [videoId]="'Ahjw6JTzYWo'"></video-element>
        </div>
      </div>
    </big-element-block>
  `,
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {}
