import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoUpsertComponent } from './auto-upsert.component';

describe('AutoUpsertComponent', () => {
  let component: AutoUpsertComponent;
  let fixture: ComponentFixture<AutoUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
