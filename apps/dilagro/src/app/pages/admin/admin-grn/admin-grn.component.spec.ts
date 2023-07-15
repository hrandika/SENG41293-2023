import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGrnComponent } from './admin-grn.component';

describe('AdminGrnComponent', () => {
  let component: AdminGrnComponent;
  let fixture: ComponentFixture<AdminGrnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminGrnComponent]
    });
    fixture = TestBed.createComponent(AdminGrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
