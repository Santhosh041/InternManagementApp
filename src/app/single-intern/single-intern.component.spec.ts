import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInternComponent } from './single-intern.component';

describe('SingleInternComponent', () => {
  let component: SingleInternComponent;
  let fixture: ComponentFixture<SingleInternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleInternComponent]
    });
    fixture = TestBed.createComponent(SingleInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
