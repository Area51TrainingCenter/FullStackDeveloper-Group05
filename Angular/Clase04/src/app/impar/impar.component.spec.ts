import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImparComponent } from './impar.component';

describe('ImparComponent', () => {
  let component: ImparComponent;
  let fixture: ComponentFixture<ImparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
