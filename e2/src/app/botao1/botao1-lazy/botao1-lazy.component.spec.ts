import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botao1LazyComponent } from './botao1-lazy.component';

describe('Botao1LazyComponent', () => {
  let component: Botao1LazyComponent;
  let fixture: ComponentFixture<Botao1LazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Botao1LazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Botao1LazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
