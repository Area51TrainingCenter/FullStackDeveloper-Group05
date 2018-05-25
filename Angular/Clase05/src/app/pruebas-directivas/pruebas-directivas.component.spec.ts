import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasDirectivasComponent } from './pruebas-directivas.component';

describe('PruebasDirectivasComponent', () => {
  let component: PruebasDirectivasComponent;
  let fixture: ComponentFixture<PruebasDirectivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebasDirectivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
