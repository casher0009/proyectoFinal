import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorycardsComponent } from './historycards.component';

describe('HistorycardsComponent', () => {
  let component: HistorycardsComponent;
  let fixture: ComponentFixture<HistorycardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorycardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorycardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
