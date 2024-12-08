import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeviceMaintainanceComponent } from './add-edit-device-maintainance.component';

describe('AddEditDeviceMaintainanceComponent', () => {
  let component: AddEditDeviceMaintainanceComponent;
  let fixture: ComponentFixture<AddEditDeviceMaintainanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditDeviceMaintainanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditDeviceMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
