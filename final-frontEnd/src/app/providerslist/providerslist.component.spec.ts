import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderslistComponent } from './providerslist.component';

describe('ProviderslistComponent', () => {
  let component: ProviderslistComponent;
  let fixture: ComponentFixture<ProviderslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
