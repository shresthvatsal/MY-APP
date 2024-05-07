import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingnewpollComponent } from './creatingnewpoll.component';

describe('CreatingnewpollComponent', () => {
  let component: CreatingnewpollComponent;
  let fixture: ComponentFixture<CreatingnewpollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingnewpollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatingnewpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
