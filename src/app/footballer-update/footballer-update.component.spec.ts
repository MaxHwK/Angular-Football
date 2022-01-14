import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballerUpdateComponent } from './footballer-update.component';

describe('FootballerUpdateComponent', () => {
  let component: FootballerUpdateComponent;
  let fixture: ComponentFixture<FootballerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
