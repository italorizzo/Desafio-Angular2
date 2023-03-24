import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botao3LazyComponent } from './botao3-lazy.component';

describe('Botao3LazyComponent', () => {
  let component: Botao3LazyComponent;
  let fixture: ComponentFixture<Botao3LazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Botao3LazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Botao3LazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
