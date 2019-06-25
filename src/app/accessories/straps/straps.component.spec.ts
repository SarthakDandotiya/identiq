import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrapsComponent } from './straps.component';

describe('StrapsComponent', () => {
  let component: StrapsComponent;
  let fixture: ComponentFixture<StrapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
