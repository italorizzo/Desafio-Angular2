import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botao1Component } from './botao1.component';

describe('Botao1Component', () => {
  let component: Botao1Component;
  let fixture: ComponentFixture<Botao1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Botao1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Botao1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
