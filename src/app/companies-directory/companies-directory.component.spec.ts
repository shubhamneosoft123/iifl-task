import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesDirectoryComponent } from './companies-directory.component';

describe('CompaniesDirectoryComponent', () => {
  let component: CompaniesDirectoryComponent;
  let fixture: ComponentFixture<CompaniesDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
