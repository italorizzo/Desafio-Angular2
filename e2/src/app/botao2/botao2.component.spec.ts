import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botao2Component } from './botao2.component';

describe('Botao2Component', () => {
  let component: Botao2Component;
  let fixture: ComponentFixture<Botao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Botao2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Botao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
