import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTrash } from './button-trash';

describe('ButtonTrash', () => {
  let component: ButtonTrash;
  let fixture: ComponentFixture<ButtonTrash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTrash],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonTrash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
