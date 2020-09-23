import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelInformationComponent } from './personel-information.component';

describe('KisiselBilgilerComponent', () => {
  let component: PersonelInformationComponent;
  let fixture: ComponentFixture<PersonelInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonelInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
