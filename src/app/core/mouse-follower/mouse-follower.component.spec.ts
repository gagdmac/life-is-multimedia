import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseFollowerComponent } from './mouse-follower.component';

describe('MouseFollowerComponent', () => {
  let component: MouseFollowerComponent;
  let fixture: ComponentFixture<MouseFollowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouseFollowerComponent]
    });
    fixture = TestBed.createComponent(MouseFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
