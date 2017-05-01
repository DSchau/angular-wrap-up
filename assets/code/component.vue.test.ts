import Vue from 'vue';

import PnetComponent from './component.vue';

describe('PnetComponent', () => {
  let component: PnetComponent;

  beforeEach(() => {
    component = new Vue(component).$mount();
  });

  it('can pass `prop` property', () => {
    component.prop = 'Some value';

    expect(component.prop).toEqual('Some value');
  });
});
