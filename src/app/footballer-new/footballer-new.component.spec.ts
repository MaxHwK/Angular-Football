import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballerNewComponent } from './footballer-new.component';

describe('FootballerNewComponent', () => {
  let component: FootballerNewComponent;
  let fixture: ComponentFixture<FootballerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballerNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
