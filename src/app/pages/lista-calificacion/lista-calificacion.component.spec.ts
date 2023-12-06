import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCalificacionComponent } from './lista-calificacion.component';

describe('ListaCalificacionComponent', () => {
  let component: ListaCalificacionComponent;
  let fixture: ComponentFixture<ListaCalificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCalificacionComponent]
    });
    fixture = TestBed.createComponent(ListaCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
