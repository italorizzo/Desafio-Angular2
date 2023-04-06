import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosLazyComponent } from './favoritos-lazy.component';

describe('FavoritosLazyComponent', () => {
  let component: FavoritosLazyComponent;
  let fixture: ComponentFixture<FavoritosLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritosLazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritosLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
