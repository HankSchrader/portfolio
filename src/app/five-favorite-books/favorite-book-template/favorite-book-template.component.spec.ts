import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBookTemplateComponent } from './favorite-book-template.component';

describe('FavoriteBookTemplateComponent', () => {
  let component: FavoriteBookTemplateComponent;
  let fixture: ComponentFixture<FavoriteBookTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteBookTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBookTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
