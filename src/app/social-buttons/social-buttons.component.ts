import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SocialButtonsComponent implements OnChanges {

  @Input() provider: string;
  @Input() link: string;
  public providerLink: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.providerLink = `fab fa-${this.provider}`;
  }


}
