import {Component, ElementRef, Input, ViewChild} from "@angular/core";

@Component({
  selector: 'faq-element',
  template: `
    <div class="faq-element-container">
      <button class="accordion" (click)="handleClick()">
        <h3>{{buttonName}}</h3>
      </button>
      <div class="panel" #panel>
        <p>{{description}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./faq-element.component.css']
})
export class FaqElementComponent {

  @Input() buttonName: string;
  @Input() description: string;

  @ViewChild("panel") linkComponent: ElementRef;

  handleClick() {
    const currentStyle = this.linkComponent.nativeElement.style;
    this.linkComponent.nativeElement.style.display = currentStyle.display === 'block' ? 'none' : 'block';
    this.linkComponent.nativeElement.scrollIntoView();
  }
}
