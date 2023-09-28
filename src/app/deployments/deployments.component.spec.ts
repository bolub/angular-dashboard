import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentsComponent } from './deployments.component';

describe('DeploymentsComponent', () => {
  let component: DeploymentsComponent;
  let fixture: ComponentFixture<DeploymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeploymentsComponent]
    });
    fixture = TestBed.createComponent(DeploymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
