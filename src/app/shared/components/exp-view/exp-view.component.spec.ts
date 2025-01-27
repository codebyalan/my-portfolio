import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpViewComponent } from './exp-view.component';

describe('ExpViewComponent', () => {
  let component: ExpViewComponent;
  let fixture: ComponentFixture<ExpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
