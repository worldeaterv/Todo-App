import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTasksCardComponent } from './no-tasks-card.component';

describe('NoTasksCardComponent', () => {
  let component: NoTasksCardComponent;
  let fixture: ComponentFixture<NoTasksCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoTasksCardComponent]
    });
    fixture = TestBed.createComponent(NoTasksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
