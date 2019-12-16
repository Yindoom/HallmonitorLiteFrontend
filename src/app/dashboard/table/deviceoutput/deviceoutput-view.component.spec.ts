import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceoutputViewComponent } from './deviceoutput-view.component';

describe('DeviceoutputViewComponent', () => {
  let component: DeviceoutputViewComponent;
  let fixture: ComponentFixture<DeviceoutputViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceoutputViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceoutputViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
