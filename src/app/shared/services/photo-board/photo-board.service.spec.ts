import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PhotoBoardService } from './photo-board.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

const mockData = {
  api: 'http://localhost:3000/photos',
  data: [
    {
      id: 1,
      description: 'example 1',
      src: ''
    },
    {
      id: 2,
      description: 'example 2',
      src: ''
    }
  ]
}

describe('PhotoBoardService', () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpClient
      ]
    }).compileComponents();
    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    /** Verifica se todas as requisições http de teste tiveram alguma resposta (tem que ter) */
    httpController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${PhotoBoardService.prototype.getPhotos.name} should return photos with 
  description in uppercase`,
  (done)=> {
    service.getPhotos().subscribe(photos => {
      expect(photos[0].description).toBe('EXAMPLE 1');
      expect(photos[1].description).toBe('EXAMPLE 2');
      done();
    });

    /** requisição para api do mock (igual a real) vai retornar o dado mockado 
     * tem que ser adicionado após a chamada subscribe do service e não antes 
     * (httpController espera a requisição antes de saber o que fazer)
     * 
     * controller dispara o service com o expectOne
    */
    httpController
    .expectOne(mockData.api)
    .flush(mockData.data);
  })
});
