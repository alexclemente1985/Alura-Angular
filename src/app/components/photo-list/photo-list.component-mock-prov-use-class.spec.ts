import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { Photo } from 'src/app/shared/interfaces/photo';
import { PhotoBoardService } from 'src/app/shared/services/photo-board/photo-board.service';
import { PhotoBoardMockService } from 'src/app/shared/services/photo-board/test/photo-board-mock-service';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe(PhotoListComponent.name + 'Mock Provider Use Class', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoListComponent ],
      imports:[
        PhotoListModule,
        HttpClientModule
      ],
      providers: [
        /** Isto faz com que o getPhotos a ser chamado seja o com os dados mockados
         *  ao invés dos do endpoint original, porém usando um mock service.  */
        {
          provide: PhotoBoardService,
          useClass: PhotoBoardMockService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(DOM)Should display board when data arrives`, () => {
   
    /* Simulação do retorno do endpoint com o service de fotos */
   
    
    /* Chamada de detectChanges após modificação do service  */
    fixture.detectChanges();
    const board = fixture.nativeElement
    .querySelector('app-photo-board');
    const loader = fixture.nativeElement
    .querySelector('.loader');
    expect(board).withContext('Should display board').not.toBeNull();
    expect(loader).withContext('Should not display loader').toBeNull();
  });
});
