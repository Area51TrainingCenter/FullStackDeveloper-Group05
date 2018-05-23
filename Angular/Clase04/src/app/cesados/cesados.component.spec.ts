import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CesadosComponent } from './cesados.component';

describe('CesadosComponent', () => {
  let component: CesadosComponent;
  let fixture: ComponentFixture<CesadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CesadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CesadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
