import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesOfTheDragonComponent } from './eyes-of-the-dragon.component';

describe('EyesOfTheDragonComponent', () => {
  let component: EyesOfTheDragonComponent;
  let fixture: ComponentFixture<EyesOfTheDragonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyesOfTheDragonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyesOfTheDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
