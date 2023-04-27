import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from '../../interfaces/photo';

import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';

function buildPhotoList(): Photo[]{
  const photos: Photo[] = [];

  for(let i = 0; i<8; i++){
    photos.push({
      id: i +1,
      url: '',
      description: ''
    })
  }
  return photos;
}

/**NOTA: método em que se dispensa a chamada forçada de ngOnChanges
 * 1- Criação de dummy component com ViewChild para o componente original (e demais atributos necessários)
 * 2- Chamada do componente original como template do dummy component
 * 
 * Dessa forma, se compensa o problema da falta de ativação do ngOnChanges pois o dummy funciona
 * como o componente pai
 * 
 * DESVANTAGEM: abstrai muito o funcionamento do ngOnChange e sua importância no processo
 */

describe(PhotoBoardComponent.name, () => {
  let component: PhotoBoardTestComponent;
  let fixture: ComponentFixture<PhotoBoardTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoBoardTestComponent ],
      imports: [PhotoBoardModule, HttpClientModule],
      providers: [
        HttpClient
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Should display rows and columns when (@Input photos) has value`,
  () => {
    component.photos = buildPhotoList();

    fixture.detectChanges();

    /**NOTA: ngOnChanges somente é ativado por meio de componente pai...
     * o recurso abaixo foi necessário para forçar sua ativação
     */

   /* const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true)
    }

    component.ngOnChanges(change); */

    expect(component.board.rows.length)
    .withContext('Number of rows')
    .toBe(2);
    expect(component.board.rows[0].length)
    .withContext("Number of columns from the first row")
    .toBe(4);
    expect(component.board.rows[0].length)
    .withContext("Number of columns from the second row")
    .toBe(4)
  })
});


@Component({
    template: `
    <app-photo-board [photos]="photos">
    </app-photo-board>
    `,
})
class PhotoBoardTestComponent {
    @ViewChild(PhotoBoardComponent) public board!: PhotoBoardComponent;
    public photos: Photo[] = [];
}