import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTasksCompletedCardComponent } from './no-tasks-completed-card.component';

describe('NoTasksCompletedCardComponent', () => {
  let component: NoTasksCompletedCardComponent;
  let fixture: ComponentFixture<NoTasksCompletedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoTasksCompletedCardComponent]
    });
    fixture = TestBed.createComponent(NoTasksCompletedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
