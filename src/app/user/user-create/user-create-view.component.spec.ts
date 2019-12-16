import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateViewComponent } from './user-create-view.component';

describe('UserCreateViewComponent', () => {
  let component: UserCreateViewComponent;
  let fixture: ComponentFixture<UserCreateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
