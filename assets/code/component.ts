import { Component, Input } from '@angular/core';

@Component({
  selector: 'pnet-component',
  styleUrls: ['./component.scss'],
  templateUrl: './commponent.html'
})
export class PnetComponent {
  @Input()
  public prop: string;
}
