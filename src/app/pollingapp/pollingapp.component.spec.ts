import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingappComponent } from './pollingapp.component';

describe('PollingappComponent', () => {
  let component: PollingappComponent;
  let fixture: ComponentFixture<PollingappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollingappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PollingappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
