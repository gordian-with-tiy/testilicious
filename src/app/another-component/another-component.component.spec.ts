import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherComponentComponent } from './another-component.component';

describe('AnotherComponentComponent', () => {
  let component: AnotherComponentComponent;
  let fixture: ComponentFixture<AnotherComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

describe('AnotherComponentComponent Inputs', () => {
  let component: TestAnotherComponentInputBindingComponent;
  let fixture: ComponentFixture<TestAnotherComponentInputBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAnotherComponentInputBindingComponent, AnotherComponentComponent ]
    })
    .compileComponents();
  }));

  it('should do something amazing', async(() => {
    fixture = TestBed.createComponent(TestAnotherComponentInputBindingComponent);
    component = fixture.componentInstance;
    component.someValue = 'whatever value';
    fixture.detectChanges();

    let anotherComponent = fixture.debugElement
      .children[0]
      .componentInstance as AnotherComponentComponent;
    expect(anotherComponent.whatever).toBe('whatever value');
  }));
});


@Component({
  selector: 'because-you-have-to-have-a-selector',
  template: `
    <app-another-component [whatever]="someValue"></app-another-component>
  `
})
class TestAnotherComponentInputBindingComponent {
  someValue: any;
}
