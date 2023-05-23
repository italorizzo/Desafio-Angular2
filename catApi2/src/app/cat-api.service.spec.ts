import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CatApiService } from './cat-api.service';
import { HttpClient } from '@angular/common/http';

describe('CatApiService', () => {
  let service: CatApiService;
  let httpMock: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatApiService]
    });

    service = TestBed.inject(CatApiService);
    httpMock = TestBed.inject(HttpClient);
  });
  it('see if the getValues was called', () => {
    let spy = spyOn(httpMock, 'get');
    service.getValues();
    expect(spy).toHaveBeenCalled()
  });
  it('see if the addFavorite add favorite', () => {
    let spy = spyOn(httpMock, 'post')
    service.addFavorite('4_AdeyZUv')
    expect(spy).toHaveBeenCalled()
  })
  it('see if the deleteCat delete cat', () => {
    let spy = spyOn(httpMock, 'delete')
    service.deleteCat('4_AdeyZUv')
    expect(spy).toHaveBeenCalled()
  })
  it('see if the addFavorite was invalid id', () => {
    const errors = ['', ' ', undefined, null]
    let spy = spyOn(httpMock, 'post')
    for (let values of errors){
      expect(() => {service.addFavorite(values)}).toThrow()
      expect(spy).toHaveBeenCalledTimes(0)
    }
  })
});
