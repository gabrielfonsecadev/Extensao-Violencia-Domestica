import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoDenunciarComponent } from './como-denunciar.component';

describe('ComoDenunciarComponent', () => {
  let component: ComoDenunciarComponent;
  let fixture: ComponentFixture<ComoDenunciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoDenunciarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoDenunciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
