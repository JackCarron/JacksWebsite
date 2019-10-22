import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcHeaderComponent } from './jc-header.component';

describe('JcHeaderComponent', () => {
  let component: JcHeaderComponent;
  let fixture: ComponentFixture<JcHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
