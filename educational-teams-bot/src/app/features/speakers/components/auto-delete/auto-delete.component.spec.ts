import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDeleteComponent } from './auto-delete.component';

describe('AutoDeleteComponent', () => {
  let component: AutoDeleteComponent;
  let fixture: ComponentFixture<AutoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
