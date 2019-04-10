import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DakotaDeadlockIslandComponent } from './dakota-deadlock-island.component';

describe('DakotaDeadlockIslandComponent', () => {
  let component: DakotaDeadlockIslandComponent;
  let fixture: ComponentFixture<DakotaDeadlockIslandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DakotaDeadlockIslandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DakotaDeadlockIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
