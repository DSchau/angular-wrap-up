import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnetComponent } from './component';

describe('PnetComponent', () => {
  let component: PnetComponent;
  let fixture: ComponentFixture<PnetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PnetComponent ]
    });

    fixture = TestBed.createComponent(PnetComponent);

    component = fixture.componentInstance;
  });

  it('can change the `prop` property', () => {
    component.prop = 'Some value';

    fixture.detectChanges();

    expect(component.prop).toEqual('Some value');
  });
});
