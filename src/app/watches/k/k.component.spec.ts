import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KComponent } from './k.component';

describe('KComponent', () => {
  let component: KComponent;
  let fixture: ComponentFixture<KComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
