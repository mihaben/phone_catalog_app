import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';

import {
  inject,
  fakeAsync,
  tick,
  TestBed
} from '@angular/core/testing';

import {
  MockBackend
} from '@angular/http/testing';

import {
  PhonesService
} from './phones.service';

describe('PhonesService', () => {

  let _service: PhonesService;
  let _backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PhonesService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });

    _service = TestBed.get(PhonesService);
    _backend = TestBed.get(MockBackend);

  });

  it('Get all the phones list', fakeAsync(() => {
      let res;
      _backend.connections.subscribe(c => {
        expect(c.request.url).toBe('http://localhost:3000/phones');
        const response = new ResponseOptions({
          body: '{"model": "iphone"}'
        });
        c.mockRespond(new Response(response));
      });
      _service.getPhones().subscribe((_res) => {
        res = _res;
      });
      tick();
      expect(res.model).toBe('iphone');
    }));

});
