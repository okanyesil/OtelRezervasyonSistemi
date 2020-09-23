import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnayComponent } from './onay.component';

describe('OnayComponent', () => {
  let component: OnayComponent;
  let fixture: ComponentFixture<OnayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
