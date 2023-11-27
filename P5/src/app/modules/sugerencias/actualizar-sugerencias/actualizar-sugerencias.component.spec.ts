import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSugerenciasComponent } from './actualizar-sugerencias.component';

describe('ActualizarSugerenciasComponent', () => {
  let component: ActualizarSugerenciasComponent;
  let fixture: ComponentFixture<ActualizarSugerenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarSugerenciasComponent]
    });
    fixture = TestBed.createComponent(ActualizarSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
