import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCantanteComponent } from './listado-cantante.component';

describe('ListadoCantanteComponent', () => {
  let component: ListadoCantanteComponent;
  let fixture: ComponentFixture<ListadoCantanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCantanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCantanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
