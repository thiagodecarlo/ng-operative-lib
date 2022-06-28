import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativeInputsComponent } from './operative-inputs.component';

describe('OperativeInputsComponent', () => {
  let component: OperativeInputsComponent;
  let fixture: ComponentFixture<OperativeInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperativeInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperativeInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
