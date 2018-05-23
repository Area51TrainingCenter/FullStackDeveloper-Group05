import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorNumeroComponent } from './generador-numero.component';

describe('GeneradorNumeroComponent', () => {
  let component: GeneradorNumeroComponent;
  let fixture: ComponentFixture<GeneradorNumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneradorNumeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
