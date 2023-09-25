import {Component, Input} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'video-element',
  template: `
    <iframe width="560"
            height="315"
            [src]="url()"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
  `,
  styleUrls: ['./video-element.component.css']
})
export class VideoElementComponent {
  @Input() videoId: string;

  constructor(private sanitizer: DomSanitizer) {}

  url() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`);
  }
}
