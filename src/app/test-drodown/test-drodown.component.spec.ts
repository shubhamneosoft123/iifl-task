import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDrodownComponent } from './test-drodown.component';

describe('TestDrodownComponent', () => {
  let component: TestDrodownComponent;
  let fixture: ComponentFixture<TestDrodownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDrodownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDrodownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
