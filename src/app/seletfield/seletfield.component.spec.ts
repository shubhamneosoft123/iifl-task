import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletfieldComponent } from './seletfield.component';

describe('SeletfieldComponent', () => {
  let component: SeletfieldComponent;
  let fixture: ComponentFixture<SeletfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
