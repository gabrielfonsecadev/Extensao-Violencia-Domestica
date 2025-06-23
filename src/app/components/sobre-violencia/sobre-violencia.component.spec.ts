import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreViolenciaComponent } from './sobre-violencia.component';

describe('SobreViolenciaComponent', () => {
  let component: SobreViolenciaComponent;
  let fixture: ComponentFixture<SobreViolenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreViolenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreViolenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
