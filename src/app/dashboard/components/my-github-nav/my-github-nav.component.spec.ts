import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGithubNavComponent } from './my-github-nav.component';

describe('MyGithubNavComponent', () => {
  let component: MyGithubNavComponent;
  let fixture: ComponentFixture<MyGithubNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyGithubNavComponent]
    });
    fixture = TestBed.createComponent(MyGithubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
