import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { Photo } from 'src/app/shared/interfaces/photo';
import { PhotoBoardService } from 'src/app/shared/services/photo-board/photo-board.service';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe(PhotoListComponent.name, () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let service: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoListComponent ],
      imports:[
        PhotoListModule,
        HttpClientModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService)
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(DOM)Should display board when data arrives`, () => {
    const photos = buildPhotoList();
    /* Simulação do retorno do endpoint com o service de fotos */
    spyOn(service, 'getPhotos')
    .and.returnValue(of(photos));
    /* Chamada de detectChanges após modificação do service  */
    fixture.detectChanges();
    const board = fixture.nativeElement
    .querySelector('app-photo-board');
    const loader = fixture.nativeElement
    .querySelector('.loader');
    expect(board).withContext('Should display board').not.toBeNull();
    expect(loader).withContext('Should not display loader').toBeNull();
  });

  it(`(DOM)Should display loader when waiting for data`, () => {
    const photos = buildPhotoList();
    /* Simulação do retorno do endpoint com o service de fotos */
    spyOn(service, 'getPhotos')
    .and.returnValue(null as unknown as Observable<Photo[]>);
    /* Chamada de detectChanges após modificação do service  */
    fixture.detectChanges();
    const board = fixture.nativeElement
    .querySelector('app-photo-board');
    const loader = fixture.nativeElement
    .querySelector('.loader');
    expect(board).withContext('Should not display board').toBeNull();
    expect(loader).withContext('Should display loader').not.toBeNull();
  })
});
