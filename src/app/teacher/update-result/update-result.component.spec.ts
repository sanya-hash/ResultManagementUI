import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResultComponent } from './update-result.component';

describe('UpdateResultComponent', () => {
  let component: UpdateResultComponent;
  let fixture: ComponentFixture<UpdateResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateResultComponent]
    });
    fixture = TestBed.createComponent(UpdateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
