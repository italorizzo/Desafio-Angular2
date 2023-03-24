import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botao3Component } from './botao3.component';

describe('Botao3Component', () => {
  let component: Botao3Component;
  let fixture: ComponentFixture<Botao3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Botao3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Botao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
