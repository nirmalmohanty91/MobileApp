import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExpComponent } from './my-exp.component';

describe('MyExpComponent', () => {
  let component: MyExpComponent;
  let fixture: ComponentFixture<MyExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
