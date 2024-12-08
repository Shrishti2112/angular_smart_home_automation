import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreferrenceComponent } from './user-preferrence.component';

describe('UserPreferrenceComponent', () => {
  let component: UserPreferrenceComponent;
  let fixture: ComponentFixture<UserPreferrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPreferrenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPreferrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
