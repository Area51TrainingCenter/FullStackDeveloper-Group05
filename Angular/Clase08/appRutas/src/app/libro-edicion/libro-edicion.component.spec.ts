import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroEdicionComponent } from './libro-edicion.component';

describe('LibroEdicionComponent', () => {
  let component: LibroEdicionComponent;
  let fixture: ComponentFixture<LibroEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
