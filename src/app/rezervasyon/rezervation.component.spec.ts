import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervationComponent } from './rezervation.component';

describe('RezervasyonComponent', () => {
  let component: RezervationComponent;
  let fixture: ComponentFixture<RezervationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
