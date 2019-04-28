import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BayouBadNewsComponent } from './bayou-bad-news.component';

describe('BayouBadNewsComponent', () => {
  let component: BayouBadNewsComponent;
  let fixture: ComponentFixture<BayouBadNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayouBadNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BayouBadNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
