import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitivosComponent } from './aperitivos.component';

describe('AperitivosComponent', () => {
  let component: AperitivosComponent;
  let fixture: ComponentFixture<AperitivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AperitivosComponent]
    });
    fixture = TestBed.createComponent(AperitivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
