import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAutomationComponent } from './add-edit-automation.component';

describe('AddEditAutomationComponent', () => {
  let component: AddEditAutomationComponent;
  let fixture: ComponentFixture<AddEditAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditAutomationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
